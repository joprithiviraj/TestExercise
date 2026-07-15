export interface Inspection {
  id: number;
  inspectionName?: string;
  inspectionDescription?: string;
  photo?: string;
  syncStatus?: 'Synced' | 'Pending Sync' | 'Sync Failed';
}