"use client";

import { useState, useEffect, useCallback } from "react";
import { Trash2, Plus, X } from "lucide-react";
import { AppShell } from "@/components/shell";
import { cn } from "@/lib/utils";
import {
  getStudents,
  addStudent,
  removeStudent,
  getActiveStudentId,
  setActiveStudentId,
} from "@/lib/progress";
import type { Student } from "@/lib/types";

const PRESET_COLORS = [
  "#4f46e5",
  "#059669",
  "#d97706",
  "#dc2626",
  "#7c3aed",
  "#0891b2",
  "#be185d",
  "#65a30d",
];

const STAGES: Student["stage"][] = ["Grammar", "Logic", "Rhetoric"];

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(8);
  const [stage, setStage] = useState<Student["stage"]>("Grammar");
  const [color, setColor] = useState(PRESET_COLORS[0]);

  const loadStudents = useCallback(() => {
    setStudents(getStudents());
  }, []);

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  function handleAdd() {
    if (!name.trim()) return;
    const student: Student = {
      id: `student-${Date.now()}`,
      name: name.trim(),
      age,
      stage,
      avatarColor: color,
    };
    addStudent(student);
    setName("");
    setAge(8);
    setStage("Grammar");
    setColor(PRESET_COLORS[0]);
    setShowForm(false);
    loadStudents();
    window.dispatchEvent(new Event("student-changed"));
  }

  function handleDelete(id: string) {
    removeStudent(id);
    const activeId = getActiveStudentId();
    if (activeId === id) {
      const remaining = getStudents();
      if (remaining.length > 0) {
        setActiveStudentId(remaining[0].id);
      }
    }
    setConfirmDelete(null);
    loadStudents();
    window.dispatchEvent(new Event("student-changed"));
  }

  return (
    <AppShell
      crumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Students" },
      ]}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Students</h2>
        {!showForm && (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors",
              "bg-accent text-accent-foreground hover:bg-accent-hover"
            )}
          >
            <Plus className="size-3.5" />
            Add Student
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-lg p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold text-foreground">
              New Student
            </h3>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="size-7 grid place-items-center rounded-md text-muted hover:text-foreground transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[12.5px] font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Student name"
                className={cn(
                  "w-full h-9 px-3 rounded-md border border-border bg-background text-[13px] text-foreground",
                  "placeholder:text-subtle focus:outline-none focus:border-accent transition-colors"
                )}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12.5px] font-medium text-foreground">
                Age
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                min={3}
                max={18}
                className={cn(
                  "w-full h-9 px-3 rounded-md border border-border bg-background text-[13px] text-foreground",
                  "focus:outline-none focus:border-accent transition-colors"
                )}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12.5px] font-medium text-foreground">
                Stage
              </label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value as Student["stage"])}
                className={cn(
                  "w-full h-9 px-3 rounded-md border border-border bg-background text-[13px] text-foreground",
                  "focus:outline-none focus:border-accent transition-colors"
                )}
              >
                {STAGES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12.5px] font-medium text-foreground">
                Color
              </label>
              <div className="flex items-center gap-2 h-9">
                {PRESET_COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={cn(
                      "size-7 rounded-full transition-all shrink-0",
                      color === c
                        ? "ring-2 ring-accent ring-offset-2 ring-offset-background scale-110"
                        : "hover:scale-105"
                    )}
                    style={{ backgroundColor: c }}
                    aria-label={`Select color ${c}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleAdd}
              disabled={!name.trim()}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors",
                "bg-accent text-accent-foreground hover:bg-accent-hover",
                "disabled:opacity-40 disabled:pointer-events-none"
              )}
            >
              Save Student
            </button>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {students.map((s) => (
          <div
            key={s.id}
            className="bg-card border border-border rounded-lg p-4 flex items-start gap-3"
          >
            <span
              className="size-10 rounded-full flex items-center justify-center text-white text-[14px] font-semibold shrink-0"
              style={{ backgroundColor: s.avatarColor }}
            >
              {s.name[0]}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-medium text-foreground truncate">
                {s.name}
              </p>
              <p className="text-[12.5px] text-muted">
                Age {s.age} &middot; {s.stage} Stage
              </p>
            </div>
            <div className="shrink-0">
              {confirmDelete === s.id ? (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleDelete(s.id)}
                    className="text-[11px] font-medium text-negative hover:underline px-1.5 py-1"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmDelete(null)}
                    className="text-[11px] font-medium text-muted hover:text-foreground px-1.5 py-1"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmDelete(s.id)}
                  className="size-7 grid place-items-center rounded-md text-muted hover:text-negative transition-colors"
                  aria-label={`Delete ${s.name}`}
                >
                  <Trash2 className="size-3.5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {students.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[14px] text-muted">
            No students yet. Add your first student to get started.
          </p>
        </div>
      )}
    </AppShell>
  );
}
