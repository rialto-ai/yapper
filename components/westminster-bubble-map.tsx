"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wcfCategories, WCFCategory, WCFChapter } from "@/lib/westminster-data";
import { X } from "lucide-react";

interface NodePosition {
  x: number;
  y: number;
  radius: number;
}

interface CategoryNode extends NodePosition {
  category: WCFCategory;
}

interface ChapterNode extends NodePosition {
  chapter: WCFChapter;
  category: WCFCategory;
}

function computeLayout(width: number, height: number) {
  const cx = width / 2;
  const cy = height / 2;

  const isSmall = width < 700;
  const centerRadius = isSmall ? 40 : 60;
  const categoryRadius = isSmall ? 30 : 42;
  const chapterRadius = isSmall ? 14 : 20;
  const ring1 = isSmall ? 120 : 200;
  const ring2 = isSmall ? 210 : 360;

  const categories: CategoryNode[] = wcfCategories.map((cat, i) => {
    const angle = (i / wcfCategories.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + Math.cos(angle) * ring1,
      y: cy + Math.sin(angle) * ring1,
      radius: categoryRadius,
      category: cat,
    };
  });

  const chapters: ChapterNode[] = [];
  wcfCategories.forEach((cat, catIdx) => {
    const catAngle = (catIdx / wcfCategories.length) * Math.PI * 2 - Math.PI / 2;
    const totalChapters = cat.chapters.length;
    const arcSpread = Math.min(0.4, totalChapters * 0.08);

    cat.chapters.forEach((ch, chIdx) => {
      const offset =
        totalChapters === 1
          ? 0
          : ((chIdx / (totalChapters - 1)) - 0.5) * arcSpread * Math.PI * 2;
      const angle = catAngle + offset;
      chapters.push({
        x: cx + Math.cos(angle) * ring2,
        y: cy + Math.sin(angle) * ring2,
        radius: chapterRadius,
        chapter: ch,
        category: cat,
      });
    });
  });

  return { cx, cy, centerRadius, categories, chapters };
}

export function WestminsterBubbleMap() {
  const [selectedChapter, setSelectedChapter] = useState<{
    chapter: WCFChapter;
    category: WCFCategory;
  } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [dimensions] = useState({ width: 900, height: 900 });

  const layout = useMemo(
    () => computeLayout(dimensions.width, dimensions.height),
    [dimensions]
  );

  const handleChapterClick = useCallback(
    (chapter: WCFChapter, category: WCFCategory) => {
      setSelectedChapter({ chapter, category });
    },
    []
  );

  const handleCategoryClick = useCallback((catId: string) => {
    setActiveCategory((prev: string | null) => (prev === catId ? null : catId));
  }, []);

  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      <svg
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="w-full h-auto"
        style={{ maxHeight: "85vh" }}
      >
        <defs>
          {wcfCategories.map((cat) => (
            <radialGradient key={cat.id} id={`grad-${cat.id}`}>
              <stop offset="0%" stopColor={cat.color} stopOpacity="0.9" />
              <stop offset="100%" stopColor={cat.color} stopOpacity="0.6" />
            </radialGradient>
          ))}
          <radialGradient id="grad-center">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.8" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lines from center to categories */}
        {layout.categories.map((catNode) => (
          <line
            key={`line-center-${catNode.category.id}`}
            x1={layout.cx}
            y1={layout.cy}
            x2={catNode.x}
            y2={catNode.y}
            stroke={catNode.category.color}
            strokeWidth="2"
            strokeOpacity={
              activeCategory === null || activeCategory === catNode.category.id
                ? 0.3
                : 0.08
            }
            className="transition-all duration-300"
          />
        ))}

        {/* Lines from categories to chapters */}
        {layout.chapters.map((chNode) => {
          const catNode = layout.categories.find(
            (c) => c.category.id === chNode.category.id
          )!;
          return (
            <line
              key={`line-ch-${chNode.chapter.id}`}
              x1={catNode.x}
              y1={catNode.y}
              x2={chNode.x}
              y2={chNode.y}
              stroke={chNode.category.color}
              strokeWidth="1.5"
              strokeOpacity={
                activeCategory === null || activeCategory === chNode.category.id
                  ? 0.25
                  : 0.05
              }
              className="transition-all duration-300"
            />
          );
        })}

        {/* Chapter bubbles */}
        {layout.chapters.map((chNode) => {
          const dimmed =
            activeCategory !== null && activeCategory !== chNode.category.id;
          return (
            <g
              key={`ch-${chNode.chapter.id}`}
              onClick={() =>
                handleChapterClick(chNode.chapter, chNode.category)
              }
              className="cursor-pointer"
              opacity={dimmed ? 0.2 : 1}
              style={{ transition: "opacity 300ms" }}
            >
              <circle
                cx={chNode.x}
                cy={chNode.y}
                r={chNode.radius}
                fill={chNode.category.color}
                fillOpacity="0.15"
                stroke={chNode.category.color}
                strokeWidth="1.5"
                className="transition-all duration-200 hover:fill-opacity-40"
              />
              <text
                x={chNode.x}
                y={chNode.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="currentColor"
                fontSize="9"
                fontWeight="500"
                className="pointer-events-none select-none"
              >
                {chNode.chapter.id}
              </text>
            </g>
          );
        })}

        {/* Category bubbles */}
        {layout.categories.map((catNode) => {
          const isActive = activeCategory === catNode.category.id;
          const dimmed =
            activeCategory !== null && activeCategory !== catNode.category.id;
          return (
            <g
              key={`cat-${catNode.category.id}`}
              onClick={() => handleCategoryClick(catNode.category.id)}
              className="cursor-pointer"
              opacity={dimmed ? 0.35 : 1}
              style={{ transition: "opacity 300ms" }}
            >
              <circle
                cx={catNode.x}
                cy={catNode.y}
                r={catNode.radius}
                fill={`url(#grad-${catNode.category.id})`}
                stroke={catNode.category.color}
                strokeWidth={isActive ? "3" : "2"}
                filter={isActive ? "url(#glow)" : undefined}
                className="transition-all duration-200"
              />
              <text
                x={catNode.x}
                y={catNode.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="11"
                fontWeight="600"
                className="pointer-events-none select-none"
              >
                {catNode.category.label.length > 10
                  ? catNode.category.label.split(" ").map((word, i, arr) => (
                      <tspan
                        key={i}
                        x={catNode.x}
                        dy={i === 0 ? `-${(arr.length - 1) * 0.5}em` : "1em"}
                      >
                        {word}
                      </tspan>
                    ))
                  : catNode.category.label}
              </text>
            </g>
          );
        })}

        {/* Center bubble */}
        <g>
          <circle
            cx={layout.cx}
            cy={layout.cy}
            r={layout.centerRadius}
            fill="url(#grad-center)"
            stroke="rgb(var(--border-strong))"
            strokeWidth="2"
          />
          <text
            x={layout.cx}
            y={layout.cy - 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgb(var(--foreground))"
            fontSize="11"
            fontWeight="700"
            className="select-none"
          >
            Westminster
          </text>
          <text
            x={layout.cx}
            y={layout.cy + 5}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgb(var(--foreground))"
            fontSize="11"
            fontWeight="700"
            className="select-none"
          >
            Confession
          </text>
          <text
            x={layout.cx}
            y={layout.cy + 20}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgb(var(--muted))"
            fontSize="9"
            fontWeight="500"
            className="select-none"
          >
            of Faith
          </text>
        </g>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 px-4">
        {wcfCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 border ${
              activeCategory === cat.id
                ? "border-current shadow-sm"
                : "border-transparent"
            }`}
            style={{
              color: cat.color,
              backgroundColor:
                activeCategory === cat.id ? cat.colorLight : "transparent",
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: cat.color }}
            />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {selectedChapter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 bottom-4 md:inset-x-auto md:bottom-8 md:right-8 md:left-auto md:w-[420px] card p-5 z-50 shadow-lg"
            style={{
              borderColor: selectedChapter.category.color,
              borderWidth: "1px",
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: selectedChapter.category.color }}
                >
                  {selectedChapter.category.label} — Chapter{" "}
                  {selectedChapter.chapter.id}
                </div>
                <h3 className="text-base font-bold">
                  {selectedChapter.chapter.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedChapter(null)}
                className="p-1 rounded hover:bg-[rgb(var(--surface-2))] transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
              {selectedChapter.chapter.summary}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
