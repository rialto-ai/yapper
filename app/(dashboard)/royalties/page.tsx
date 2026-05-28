"use client";

import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { Tabs } from "@/components/tabs";
import { royaltyPayments } from "@/lib/mock-data";

const statementPeriods = [
  { period: "Q1 2026", status: "Finalised", grossRevenue: "A$62,800", netPayable: "A$41,200", payees: 12, generated: "2026-04-15" },
  { period: "Q2 2026", status: "Draft", grossRevenue: "A$82,400", netPayable: "A$54,200", payees: 14, generated: "Pending" },
  { period: "March 2026", status: "Finalised", grossRevenue: "A$22,400", netPayable: "A$14,800", payees: 12, generated: "2026-04-05" },
  { period: "April 2026", status: "Finalised", grossRevenue: "A$28,600", netPayable: "A$18,900", payees: 13, generated: "2026-05-05" },
  { period: "May 2026", status: "Processing", grossRevenue: "A$31,400", netPayable: "TBD", payees: 14, generated: "Pending" },
];

const payeeEntities: Record<string, { entityType: string; paymentHistory: number }> = {
  "Grace Harbor": { entityType: "Individual", paymentHistory: 12 },
  "New City Worship": { entityType: "Organisation", paymentHistory: 18 },
  "Northstar Publishing": { entityType: "Company", paymentHistory: 24 },
  "Hannah Rejoice": { entityType: "Individual", paymentHistory: 6 },
  "Kingdom House Music": { entityType: "Company", paymentHistory: 36 },
  "Covenant Rights Group": { entityType: "Company", paymentHistory: 14 },
  "Open Heaven Worship": { entityType: "Organisation", paymentHistory: 10 },
  "Harbor Songs Administration": { entityType: "Company", paymentHistory: 8 },
};

const recoupmentData = [
  { campaign: "Come Alive Launch", artist: "Open Heaven Worship", totalSpend: "A$4,200", recouped: "A$3,100", outstanding: "A$1,100", status: "Active" },
  { campaign: "Kingdom Come Promo", artist: "New City Worship", totalSpend: "A$6,800", recouped: "A$6,800", outstanding: "A$0", status: "Fully Recouped" },
  { campaign: "Living Water Church", artist: "Grace Harbor", totalSpend: "A$2,400", recouped: "A$1,200", outstanding: "A$1,200", status: "Active" },
  { campaign: "Mercy Is Near Radio", artist: "Mercy Collective", totalSpend: "A$3,600", recouped: "A$1,800", outstanding: "A$1,800", status: "Active" },
];

const paymentRuns = [
  { runDate: "2026-06-15", period: "May 2026", payees: 14, totalAmount: "A$54,200", status: "Scheduled" },
  { runDate: "2026-05-15", period: "April 2026", payees: 13, totalAmount: "A$18,900", status: "Completed" },
  { runDate: "2026-04-15", period: "Q1 2026", payees: 12, totalAmount: "A$41,200", status: "Completed" },
];

function formatBalance(balance: number, currency: string) {
  const symbol = currency === "USD" ? "$" : "A$";
  return `${symbol}${balance.toLocaleString()}`;
}

const tabList = ["Revenue Summary", "Statements", "Payees", "Recoupment", "Payment Runs"];

export default function RoyaltiesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Selah Royalties</h1>
        <p className="text-[13px] text-muted mt-1">
          Royalty splits, statements, payee management, and recoupment, prepared with catalogue accuracy across your Christian music operation.
        </p>
      </div>

      {/* Top metrics */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Gross Revenue This Period" value="A$82,400" />
        <StatCard label="Net Payable" value="A$54,200" />
        <StatCard label="Held Balance" value="A$8,400" />
        <StatCard label="Unmatched Income" value="A$1,200" />
      </div>

      {/* Second row metrics */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Recouped Marketing" value="A$6,800" />
        <StatCard label="Pending Payments" value="8" />
        <StatCard label="Missing Tax Info" value="2" />
        <StatCard label="Disputed Claims" value="1" />
      </div>

      {/* Tabs */}
      <Tabs tabs={tabList}>
        {(activeTab) => {
          if (activeTab === "Revenue Summary") {
            return (
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Payee</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Role</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Balance</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Currency</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Payment Method</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Tax Status</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Statement Status</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Next Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {royaltyPayments.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-[13px] font-medium">{row.payee}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.role}</td>
                          <td className="px-4 py-3 text-[13px] text-right font-medium">
                            {formatBalance(row.balance, row.currency)}
                          </td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.currency}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.paymentMethod}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.taxStatus} />
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.statementStatus} />
                          </td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.nextPayment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          if (activeTab === "Statements") {
            return (
              <div className="space-y-4">
                <div className="flex justify-end">
                  <button className="btn-primary">Generate Statement</button>
                </div>
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-surface">
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Period</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Gross Revenue</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Net Payable</th>
                          <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Payees</th>
                          <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Generated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {statementPeriods.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                          >
                            <td className="px-4 py-3 text-[13px] font-medium">{row.period}</td>
                            <td className="px-4 py-3">
                              <StatusBadge status={row.status} />
                            </td>
                            <td className="px-4 py-3 text-[13px] text-right">{row.grossRevenue}</td>
                            <td className="px-4 py-3 text-[13px] text-right font-medium">{row.netPayable}</td>
                            <td className="px-4 py-3 text-[13px] text-right text-subtle">{row.payees}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.generated}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          }

          if (activeTab === "Payees") {
            return (
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Payee</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Role</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Entity Type</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Balance</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Currency</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Payment Method</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Tax Status</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Statement Status</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Payment History</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Next Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {royaltyPayments.map((row, i) => {
                        const extra = payeeEntities[row.payee] || { entityType: "Individual", paymentHistory: 0 };
                        return (
                          <tr
                            key={i}
                            className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                          >
                            <td className="px-4 py-3 text-[13px] font-medium">{row.payee}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.role}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{extra.entityType}</td>
                            <td className="px-4 py-3 text-[13px] text-right font-medium">
                              {formatBalance(row.balance, row.currency)}
                            </td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.currency}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.paymentMethod}</td>
                            <td className="px-4 py-3">
                              <StatusBadge status={row.taxStatus} />
                            </td>
                            <td className="px-4 py-3">
                              <StatusBadge status={row.statementStatus} />
                            </td>
                            <td className="px-4 py-3 text-[13px] text-subtle text-right">{extra.paymentHistory}</td>
                            <td className="px-4 py-3 text-[13px] text-subtle">{row.nextPayment}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          if (activeTab === "Recoupment") {
            return (
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Campaign</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Artist</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Total Spend</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Recouped</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Outstanding</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recoupmentData.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-[13px] font-medium">{row.campaign}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.artist}</td>
                          <td className="px-4 py-3 text-[13px] text-right">{row.totalSpend}</td>
                          <td className="px-4 py-3 text-[13px] text-right">{row.recouped}</td>
                          <td className="px-4 py-3 text-[13px] text-right font-medium">{row.outstanding}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          if (activeTab === "Payment Runs") {
            return (
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Run Date</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Period</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Payees</th>
                        <th className="text-right text-[12px] font-medium text-muted px-4 py-3">Total Amount</th>
                        <th className="text-left text-[12px] font-medium text-muted px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentRuns.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-[13px] font-medium">{row.runDate}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle">{row.period}</td>
                          <td className="px-4 py-3 text-[13px] text-subtle text-right">{row.payees}</td>
                          <td className="px-4 py-3 text-[13px] text-right font-medium">{row.totalAmount}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={row.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          return null;
        }}
      </Tabs>
    </div>
  );
}
