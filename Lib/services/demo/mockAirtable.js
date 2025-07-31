export class MockAirtableService {
  constructor() {
    this.databases = {
      'demo-base': {
        'contacts': [
          { id: 'rec1', fields: { Name: 'John Doe', Email: 'john@demo.com', Phone: '+1234567890', Status: 'Active' }},
          { id: 'rec2', fields: { Name: 'Jane Smith', Email: 'jane@demo.com', Phone: '+0987654321', Status: 'Pending' }},
          { id: 'rec3', fields: { Name: 'Bob Johnson', Email: 'bob@demo.com', Phone: '+1122334455', Status: 'Active' }}
        ],
        'appointments': [
          { id: 'rec4', fields: { Date: '2025-08-01', Time: '10:00 AM', Client: 'John Doe', Type: 'Consultation' }},
          { id: 'rec5', fields: { Date: '2025-08-02', Time: '2:00 PM', Client: 'Jane Smith', Type: 'Follow-up' }}
        ]
      }
    };
  }

  async getRecords(baseId, tableId, options = {}) {
    console.log(`[DEMO] Fetching records from ${baseId}/${tableId}`);
    
    const base = this.databases[baseId] || this.databases['demo-base'];
    const table = base[tableId] || base['contacts'];
    
    return {
      records: table,
      offset: null
    };
  }

  async createRecord(baseId, tableId, fields) {
    console.log(`[DEMO] Creating record in ${baseId}/${tableId}`, fields);
    
    const newRecord = {
      id: `rec${Date.now()}`,
      fields: fields,
      createdTime: new Date().toISOString()
    };
    
    if (!this.databases[baseId]) {
      this.databases[baseId] = {};
    }
    if (!this.databases[baseId][tableId]) {
      this.databases[baseId][tableId] = [];
    }
    this.databases[baseId][tableId].push(newRecord);
    
    return newRecord;
  }

  async updateRecord(baseId, tableId, recordId, fields) {
    console.log(`[DEMO] Updating record ${recordId} in ${baseId}/${tableId}`);
    
    return {
      id: recordId,
      fields: { ...fields, Updated: new Date().toISOString() },
      createdTime: new Date().toISOString()
    };
  }

  async deleteRecord(baseId, tableId, recordId) {
    console.log(`[DEMO] Deleting record ${recordId} from ${baseId}/${tableId}`);
    
    return {
      deleted: true,
      id: recordId
    };
  }

  async searchRecords(baseId, tableId, query) {
    console.log(`[DEMO] Searching for "${query}" in ${baseId}/${tableId}`);
    
    const base = this.databases[baseId] || this.databases['demo-base'];
    const table = base[tableId] || base['contacts'];
    
    const results = table.filter(record => 
      Object.values(record.fields).some(value => 
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
    
    return { records: results };
  }
}
