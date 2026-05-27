export const artists = [
  { name: "Grace Harbor", type: "Artist", country: "US", contact: "grace@graceharbor.com", catalogSize: 34, monthlyListeners: 482000, activeReleases: 6, rightsStatus: "Clear", serviceTier: "Label Services", accountManager: "Team A", status: "Active" },
  { name: "Hannah Rejoice", type: "Artist", country: "AU", contact: "hannah@team.com", catalogSize: 22, monthlyListeners: 215000, activeReleases: 4, rightsStatus: "Clear", serviceTier: "Managed Distribution", accountManager: "Team B", status: "Active" },
  { name: "Elias James", type: "Artist", country: "UK", contact: "elias@mgmt.co", catalogSize: 18, monthlyListeners: 178000, activeReleases: 3, rightsStatus: "Pending", serviceTier: "Managed Distribution", accountManager: "Team A", status: "Active" },
  { name: "New City Worship", type: "Worship Team", country: "US", contact: "info@newcityworship.com", catalogSize: 48, monthlyListeners: 890000, activeReleases: 8, rightsStatus: "Clear", serviceTier: "Label Services", accountManager: "Team C", status: "Active" },
  { name: "The Narrow Way", type: "Artist", country: "CA", contact: "narrow@label.co", catalogSize: 12, monthlyListeners: 95000, activeReleases: 2, rightsStatus: "Review", serviceTier: "Self-Service Distribution", accountManager: "Team B", status: "Active" },
  { name: "Kingdom House Music", type: "Label", country: "US", contact: "admin@kingdomhouse.com", catalogSize: 156, monthlyListeners: 1200000, activeReleases: 14, rightsStatus: "Clear", serviceTier: "Enterprise / Partner Portal", accountManager: "Team C", status: "Active" },
  { name: "River & Stone", type: "Artist", country: "NZ", contact: "river@stone.co", catalogSize: 8, monthlyListeners: 62000, activeReleases: 2, rightsStatus: "Clear", serviceTier: "Self-Service Distribution", accountManager: "Team A", status: "Active" },
  { name: "Mercy Collective", type: "Worship Team", country: "US", contact: "mercy@collective.org", catalogSize: 28, monthlyListeners: 340000, activeReleases: 5, rightsStatus: "Clear", serviceTier: "Managed Distribution", accountManager: "Team B", status: "Active" },
  { name: "Open Heaven Worship", type: "Worship Team", country: "AU", contact: "team@openheaven.com", catalogSize: 42, monthlyListeners: 720000, activeReleases: 7, rightsStatus: "Pending", serviceTier: "Label Services", accountManager: "Team C", status: "Active" },
  { name: "Cornerstone Songs", type: "Publisher", country: "US", contact: "info@cornerstonesongs.com", catalogSize: 210, monthlyListeners: 0, activeReleases: 0, rightsStatus: "Clear", serviceTier: "Publishing Administration", accountManager: "Team A", status: "Active" },
  { name: "Vessel Choir", type: "Worship Team", country: "ZA", contact: "info@vesselchoir.org", catalogSize: 16, monthlyListeners: 58000, activeReleases: 3, rightsStatus: "Clear", serviceTier: "Managed Distribution", accountManager: "Team B", status: "Active" },
  { name: "Covenant Sound", type: "Artist", country: "US", contact: "booking@covenantsound.com", catalogSize: 24, monthlyListeners: 310000, activeReleases: 4, rightsStatus: "Clear", serviceTier: "Label Services", accountManager: "Team C", status: "Active" },
];

export const catalog = [
  { title: "Living Water", artist: "Grace Harbor", isrc: "USRC12500001", upc: "196588410001", compositionId: "CMP-001", releaseDate: "2026-03-15", territories: "Worldwide", dspStatus: "Delivered", rightsStatus: "Confirmed", publishingStatus: "Registered", youtubeStatus: "Claimed", revenueYTD: 12400 },
  { title: "Kingdom Come", artist: "New City Worship", isrc: "USRC12500002", upc: "196588410002", compositionId: "CMP-002", releaseDate: "2026-04-01", territories: "Worldwide", dspStatus: "Delivered", rightsStatus: "Confirmed", publishingStatus: "Registered", youtubeStatus: "Claimed", revenueYTD: 28900 },
  { title: "Still My Soul", artist: "Hannah Rejoice", isrc: "USRC12500003", upc: "196588410003", compositionId: "CMP-003", releaseDate: "2026-02-20", territories: "Worldwide", dspStatus: "Delivered", rightsStatus: "Pending", publishingStatus: "Pending", youtubeStatus: "Unclaimed", revenueYTD: 6200 },
  { title: "Light of the World", artist: "Elias James", isrc: "USRC12500004", upc: "196588410004", compositionId: "CMP-004", releaseDate: "2026-05-10", territories: "Worldwide", dspStatus: "Queued", rightsStatus: "Confirmed", publishingStatus: "Registered", youtubeStatus: "Pending", revenueYTD: 0 },
  { title: "Mercy Is Near", artist: "Mercy Collective", isrc: "USRC12500005", upc: "196588410005", compositionId: "CMP-005", releaseDate: "2026-01-12", territories: "Worldwide", dspStatus: "Delivered", rightsStatus: "Confirmed", publishingStatus: "Registered", youtubeStatus: "Claimed", revenueYTD: 18700 },
  { title: "The Narrow Road", artist: "The Narrow Way", isrc: "USRC12500006", upc: "196588410006", compositionId: "CMP-006", releaseDate: "2026-04-22", territories: "US, CA, UK, AU", dspStatus: "Delivered", rightsStatus: "Review", publishingStatus: "Conflict", youtubeStatus: "Unclaimed", revenueYTD: 3100 },
  { title: "Come Alive", artist: "Open Heaven Worship", isrc: "USRC12500007", upc: "196588410007", compositionId: "CMP-007", releaseDate: "2026-03-08", territories: "Worldwide", dspStatus: "Delivered", rightsStatus: "Confirmed", publishingStatus: "Registered", youtubeStatus: "Claimed", revenueYTD: 22100 },
  { title: "All Things New", artist: "Covenant Sound", isrc: "USRC12500008", upc: "196588410008", compositionId: "CMP-008", releaseDate: "2026-05-20", territories: "Worldwide", dspStatus: "Queued", rightsStatus: "Pending", publishingStatus: "Pending", youtubeStatus: "Pending", revenueYTD: 0 },
  { title: "Table of Grace", artist: "Grace Harbor", isrc: "USRC12500009", upc: "196588410009", compositionId: "CMP-009", releaseDate: "2025-11-15", territories: "Worldwide", dspStatus: "Delivered", rightsStatus: "Confirmed", publishingStatus: "Registered", youtubeStatus: "Claimed", revenueYTD: 9800 },
  { title: "House of Prayer", artist: "Kingdom House Music", isrc: "USRC12500010", upc: "196588410010", compositionId: "CMP-010", releaseDate: "2025-12-01", territories: "Worldwide", dspStatus: "Delivered", rightsStatus: "Confirmed", publishingStatus: "Registered", youtubeStatus: "Claimed", revenueYTD: 31200 },
  { title: "Only You Are Worthy", artist: "Vessel Choir", isrc: "USRC12500011", upc: "196588410011", compositionId: "CMP-011", releaseDate: "2026-02-14", territories: "Worldwide", dspStatus: "Delivered", rightsStatus: "Confirmed", publishingStatus: "Registered", youtubeStatus: "Claimed", revenueYTD: 4500 },
  { title: "The Lord Is Near", artist: "River & Stone", isrc: "USRC12500012", upc: "196588410012", compositionId: "CMP-012", releaseDate: "2026-06-01", territories: "NZ, AU, US", dspStatus: "Not delivered", rightsStatus: "Pending", publishingStatus: "Pending", youtubeStatus: "Unclaimed", revenueYTD: 0 },
];

export const streamData = [
  { month: "Oct", streams: 320000, revenue: 9200 },
  { month: "Nov", streams: 380000, revenue: 10800 },
  { month: "Dec", streams: 510000, revenue: 14600 },
  { month: "Jan", streams: 440000, revenue: 12400 },
  { month: "Feb", streams: 490000, revenue: 13900 },
  { month: "Mar", streams: 560000, revenue: 15800 },
  { month: "Apr", streams: 620000, revenue: 17600 },
  { month: "May", streams: 680000, revenue: 19200 },
];

export const revenueByPlatform = [
  { platform: "Spotify", revenue: 38200, pct: 46 },
  { platform: "Apple Music", revenue: 18400, pct: 22 },
  { platform: "YouTube Music", revenue: 9800, pct: 12 },
  { platform: "Amazon Music", revenue: 6600, pct: 8 },
  { platform: "TikTok", revenue: 4200, pct: 5 },
  { platform: "Other", revenue: 5200, pct: 7 },
];

export const upcomingReleases = [
  { title: "Light of the World", artist: "Elias James", date: "2026-05-10", status: "In Review", type: "Single" },
  { title: "All Things New", artist: "Covenant Sound", date: "2026-05-20", status: "Assets Pending", type: "EP" },
  { title: "The Lord Is Near", artist: "River & Stone", date: "2026-06-01", status: "Draft", type: "Single" },
  { title: "Everlasting Arms", artist: "New City Worship", date: "2026-06-15", status: "Metadata Review", type: "Album" },
  { title: "Song of the Redeemed", artist: "Grace Harbor", date: "2026-07-01", status: "Rights Pending", type: "Single" },
];

export const rightsIssues = [
  { title: "The Narrow Road", artist: "The Narrow Way", issue: "Publishing conflict on songwriter split", severity: "High", daysOpen: 14 },
  { title: "Still My Soul", artist: "Hannah Rejoice", issue: "Missing songwriter confirmation", severity: "Medium", daysOpen: 8 },
  { title: "All Things New", artist: "Covenant Sound", issue: "Producer points not finalized", severity: "Medium", daysOpen: 5 },
  { title: "Light of the World", artist: "Elias James", issue: "YouTube Content ID rights unconfirmed", severity: "Low", daysOpen: 3 },
];

export const royaltyPayments = [
  { payee: "Grace Harbor", role: "Primary Artist", balance: 8420, currency: "USD", paymentMethod: "Bank Transfer", taxStatus: "Complete", statementStatus: "Ready", nextPayment: "2026-06-15" },
  { payee: "New City Worship", role: "Primary Artist", balance: 18200, currency: "USD", paymentMethod: "Bank Transfer", taxStatus: "Complete", statementStatus: "Ready", nextPayment: "2026-06-15" },
  { payee: "Northstar Publishing", role: "Publisher", balance: 6800, currency: "USD", paymentMethod: "Wire", taxStatus: "Complete", statementStatus: "Ready", nextPayment: "2026-06-15" },
  { payee: "Hannah Rejoice", role: "Primary Artist", balance: 3100, currency: "AUD", paymentMethod: "Bank Transfer", taxStatus: "Pending", statementStatus: "Held", nextPayment: "TBD" },
  { payee: "Kingdom House Music", role: "Label", balance: 22400, currency: "USD", paymentMethod: "Wire", taxStatus: "Complete", statementStatus: "Ready", nextPayment: "2026-06-15" },
  { payee: "Covenant Rights Group", role: "Rights Holder", balance: 4200, currency: "USD", paymentMethod: "Bank Transfer", taxStatus: "Complete", statementStatus: "In Review", nextPayment: "2026-06-15" },
  { payee: "Open Heaven Worship", role: "Primary Artist", balance: 14600, currency: "AUD", paymentMethod: "Bank Transfer", taxStatus: "Complete", statementStatus: "Ready", nextPayment: "2026-06-15" },
  { payee: "Harbor Songs Administration", role: "Publisher", balance: 2800, currency: "USD", paymentMethod: "Wire", taxStatus: "Missing", statementStatus: "Held", nextPayment: "TBD" },
];

export const campaignTimeline = [
  { week: "8 weeks before", task: "Strategy approved", status: "Complete" },
  { week: "6 weeks before", task: "Metadata and assets locked", status: "Complete" },
  { week: "4 weeks before", task: "DSP delivery", status: "Complete" },
  { week: "3 weeks before", task: "Playlist pitch submitted", status: "In Progress" },
  { week: "2 weeks before", task: "Content rollout begins", status: "Upcoming" },
  { week: "1 week before", task: "Church outreach begins", status: "Upcoming" },
  { week: "Release day", task: "Launch activation", status: "Upcoming" },
  { week: "1 week after", task: "Performance review", status: "Upcoming" },
  { week: "4 weeks after", task: "Campaign report", status: "Upcoming" },
];

export const compositions = [
  { title: "Living Water", writers: "Grace Harbor, M. Torres", publisher: "Northstar Publishing", splitStatus: "Confirmed", proStatus: "Registered (ASCAP)", iswc: "T-345.678.901-1", relatedRecordings: 2, youtubePublishing: "Claimed", mechanicalStatus: "Licensed", churchLicensing: "CCLI Listed", royaltyStatus: "Current" },
  { title: "Kingdom Come", writers: "J. Whitfield, S. Park", publisher: "Cornerstone Songs", splitStatus: "Confirmed", proStatus: "Registered (BMI)", iswc: "T-345.678.902-1", relatedRecordings: 3, youtubePublishing: "Claimed", mechanicalStatus: "Licensed", churchLicensing: "CCLI Listed", royaltyStatus: "Current" },
  { title: "Still My Soul", writers: "Hannah Rejoice", publisher: "Northstar Publishing", splitStatus: "Pending", proStatus: "Pending", iswc: "Pending", relatedRecordings: 1, youtubePublishing: "Unclaimed", mechanicalStatus: "Pending", churchLicensing: "Not Listed", royaltyStatus: "Pending" },
  { title: "Mercy Is Near", writers: "Mercy Collective, L. Chen", publisher: "Harbor Songs Administration", splitStatus: "Confirmed", proStatus: "Registered (SESAC)", iswc: "T-345.678.905-1", relatedRecordings: 2, youtubePublishing: "Claimed", mechanicalStatus: "Licensed", churchLicensing: "CCLI Listed", royaltyStatus: "Current" },
  { title: "Come Alive", writers: "Open Heaven Worship, R. Tane", publisher: "Kingdom House Publishing", splitStatus: "Confirmed", proStatus: "Registered (APRA)", iswc: "T-345.678.907-1", relatedRecordings: 4, youtubePublishing: "Claimed", mechanicalStatus: "Licensed", churchLicensing: "CCLI Listed", royaltyStatus: "Current" },
  { title: "The Narrow Road", writers: "The Narrow Way", publisher: "Unassigned", splitStatus: "Conflict", proStatus: "Unregistered", iswc: "Pending", relatedRecordings: 1, youtubePublishing: "Unclaimed", mechanicalStatus: "Unlicensed", churchLicensing: "Not Listed", royaltyStatus: "Blocked" },
];

export const youtubeVideos = [
  { video: "Living Water (Official Video)", channel: "Grace Harbor", assetType: "Music Video", claimStatus: "Active", monetization: "Monetized", views: 482000, revenue: 2840, conflictStatus: "None" },
  { video: "Kingdom Come (Live)", channel: "New City Worship", assetType: "Live Performance", claimStatus: "Active", monetization: "Monetized", views: 1240000, revenue: 7200, conflictStatus: "None" },
  { video: "Come Alive (Lyric Video)", channel: "Open Heaven Worship", assetType: "Lyric Video", claimStatus: "Active", monetization: "Monetized", views: 890000, revenue: 4100, conflictStatus: "None" },
  { video: "Mercy Is Near (Acoustic)", channel: "Mercy Collective", assetType: "Acoustic", claimStatus: "Active", monetization: "Monetized", views: 320000, revenue: 1600, conflictStatus: "None" },
  { video: "House of Prayer (Worship Night)", channel: "Kingdom House Music", assetType: "Live Performance", claimStatus: "Active", monetization: "Monetized", views: 2100000, revenue: 12400, conflictStatus: "None" },
  { video: "Still My Soul (Audio)", channel: "Hannah Rejoice", assetType: "Audio", claimStatus: "Pending", monetization: "Not Monetized", views: 45000, revenue: 0, conflictStatus: "Ownership Dispute" },
  { video: "The Narrow Road (Visualizer)", channel: "The Narrow Way", assetType: "Visualizer", claimStatus: "Inactive", monetization: "Not Monetized", views: 28000, revenue: 0, conflictStatus: "Publishing Conflict" },
  { video: "Table of Grace (Live Session)", channel: "Grace Harbor", assetType: "Live Performance", claimStatus: "Active", monetization: "Monetized", views: 156000, revenue: 920, conflictStatus: "None" },
];

export const partners = [
  { partner: "Kingdom House Music", type: "Label", artists: 12, releases: 48, monthlyStreams: 1200000, openRightsIssues: 1, pendingPayouts: 22400, serviceTier: "Enterprise / Partner Portal", status: "Active" },
  { partner: "Covenant Rights Group", type: "Publisher", artists: 0, releases: 0, monthlyStreams: 0, openRightsIssues: 3, pendingPayouts: 4200, serviceTier: "Publishing Administration", status: "Active" },
  { partner: "New City Music Group", type: "Label", artists: 6, releases: 24, monthlyStreams: 890000, openRightsIssues: 0, pendingPayouts: 14200, serviceTier: "Label Services", status: "Active" },
  { partner: "Riverstone Rights", type: "Distributor", artists: 22, releases: 86, monthlyStreams: 3400000, openRightsIssues: 2, pendingPayouts: 48600, serviceTier: "Enterprise / Partner Portal", status: "Active" },
  { partner: "Harbor Songs Administration", type: "Publisher", artists: 0, releases: 0, monthlyStreams: 0, openRightsIssues: 1, pendingPayouts: 2800, serviceTier: "Publishing Administration", status: "Active" },
  { partner: "Kingdom House Publishing", type: "Publisher", artists: 0, releases: 0, monthlyStreams: 0, openRightsIssues: 0, pendingPayouts: 6100, serviceTier: "Publishing Administration", status: "Active" },
];

export const churchAdoptionFunnel = [
  { stage: "Song discovered", count: 12400 },
  { stage: "Saved by worship leader", count: 4800 },
  { stage: "Chord chart downloaded", count: 2200 },
  { stage: "Added to planning library", count: 1400 },
  { stage: "Used in Sunday setlist", count: 680 },
  { stage: "Congregation usage reported", count: 320 },
];
