/* UNIKI V.1 — local-first PWA application shell.
 * The browser edition keeps records in IndexedDB and uses a local rule-based helper.
 */
'use strict';

// SUPABASE

const supabaseUrl = 'https://kfdaakvjkxphomforvft.supabase.co';

const supabaseKey = 'sb_publishable_Hz1j4amAYKS3H3Vq53ixZQ_L118RzD_';

const supabaseClient = supabase.createClient(
supabaseUrl,
supabaseKey
);
 
console.log('Supabase Connected');
async function uploadFile() {

  alert('uploadFile dipanggil');

  const file =
    document.getElementById('fileInput').files[0];

  if (!file) {
    alert('Pilih fail dahulu');
    return;
  }

  const fileName =
    `${Date.now()}-${file.name}`;

  const { data, error } =
    await supabaseClient.storage
      .from('uploads')
      .upload(fileName, file);

  console.log('UPLOAD DATA:', data);
  console.error('UPLOAD ERROR:', error);

  if (error) {
    alert('ERROR: ' + JSON.stringify(error));
  } else {
    alert('SUCCESS: ' + JSON.stringify(data));
    }
  }
  
  } // tutup fungsi uploadFile

// testSupabase();
// tambahTestUser();

const APP_VERSION = '1.2.1';
const APP_TABLES = ['communities','users','roles','members','households','announcements','events','eventParticipants','incidents','complaints','volunteers','meetings','documents','income','expenses','payments','receivedPayments','notifications','audit','settings','syncLog'];
const FINANCE_TABLES = ['income','expenses','payments','receivedPayments'];
const PAGE_META = {
  dashboard:['Ringkasan komuniti','Gambaran pantas komuniti, operasi dan kewangan.'],
  members:['Ahli komuniti','Urus profil, kategori dan status ahli.'],
  households:['Isi rumah','Hubungkan ahli mengikut keluarga atau alamat.'],
  announcements:['Pengumuman','Terbit dan urus maklumat untuk komuniti.'],
  events:['Acara & aktiviti','Rancang program, pendaftaran dan kehadiran.'],
  incidents:['Laporan kejadian','Jejak isu keselamatan, fasiliti dan tindakan susulan.'],
  complaints:['Aduan & maklum balas','Terima, tugaskan dan susuli maklum balas komuniti.'],
  volunteers:['Sukarelawan','Urus kemahiran, ketersediaan dan penyertaan.'],
  meetings:['Mesyuarat','Simpan agenda, minit dan tindakan susulan.'],
  documents:['Dokumen','Simpan dan cari dokumen komuniti secara setempat.'],
  finance:['Kewangan','Pantau kedudukan dan aktiviti kewangan komuniti.'],
  income:['Pendapatan','Rekod sumber pendapatan dan kelulusan.'],
  expenses:['Perbelanjaan','Rekod perbelanjaan, vendor dan resit.'],
  payments:['Permohonan kewangan / Bayar','Rekod permohonan, maklumat bayaran, bukti dan status pembayaran.'],
  receivedPayments:['Terima bayaran','Rekod penerimaan, status bayaran dan keluarkan resit.'],
  receipts:['Resit rasmi','Lihat dan cetak resit penerimaan yang disahkan.'],
  reports:['Pusat laporan','Tapis, pratonton, eksport atau cetak laporan.'],
  ai:['UNIKI AI Helper','Bantuan ringkasan secara local tanpa menghantar data keluar.'],
  users:['Pengguna','Urus akaun dan peranan akses.'],
  roles:['Peranan & kebenaran','Konfigurasi akses mengikut modul dan tindakan.'],
  audit:['Jejak audit','Semak sejarah aktiviti dan perubahan sistem.'],
  sync:['Backup & Sync','Urus sandaran setempat dan aliran pemindahan data.'],
  settings:['Tetapan','Konfigurasi komuniti, keselamatan dan privasi.']
};
const MODULE_LABELS = {
  dashboard:'Dashboard',members:'Ahli',households:'Isi rumah',announcements:'Pengumuman',events:'Acara',incidents:'Kejadian',complaints:'Aduan',volunteers:'Sukarelawan',meetings:'Mesyuarat',documents:'Dokumen',income:'Pendapatan',expenses:'Perbelanjaan',payments:'Permohonan kewangan',receivedPayments:'Terima bayaran',receipts:'Resit',reports:'Laporan',ai:'AI Helper',users:'Pengguna',roles:'Peranan',audit:'Jejak audit',sync:'Backup & Sync',settings:'Tetapan'
};
const PERMISSION_MODULES = ['members','households','announcements','events','incidents','complaints','volunteers','meetings','documents','income','expenses','payments','receivedPayments','reports','users','roles','audit','sync','settings','ai'];
const ACTIONS = ['view','add','edit','delete','approve'];
const ACTION_LABELS = {view:'Lihat',add:'Tambah',edit:'Edit',delete:'Padam',approve:'Lulus / sahkan'};
const ROLE_NAMES = ['Owner','Administrator','Manager','Committee','Moderator','Staff','Member'];
const STATUS_LABELS = {
  Active:'Aktif',Inactive:'Tidak aktif',Draft:'Draf',Scheduled:'Dijadualkan',Published:'Diterbitkan',
  'Registration Open':'Pendaftaran dibuka',Full:'Penuh',Completed:'Selesai',Cancelled:'Dibatalkan',
  New:'Baharu','In Progress':'Dalam tindakan',Resolved:'Selesai',Closed:'Ditutup',
  Received:'Bayaran diterima',Accepted:'Diterima',Waiting:'Menunggu',Pending:'Menunggu',
  'Pending Payment':'Menunggu pembayaran','Awaiting Payment':'Menunggu bayaran',
  Paid:'Sudah dibayar',Verified:'Disahkan',Failed:'Gagal',Refunded:'Bayaran dikembalikan (Refund)',
  Unpaid:'Belum dibayar',Partial:'Bayaran sebahagian',Overdue:'Bayaran lewat',
  'Partially Received':'Bayaran sebahagian diterima','Fully Received':'Bayaran penuh diterima',
  Rejected:'Bayaran ditolak','Pending Approval':'Menunggu kelulusan',Approved:'Diluluskan',Posted:'Diposting',
  'Pending Verification':'Menunggu pengesahan',Registered:'Berdaftar','Not Attended':'Tidak hadir',
  Attended:'Hadir',Open:'Terbuka'
};
const ICON_PATHS = {
  home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  family:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 8v6m3-3h-6"/>',
  megaphone:'<path d="m3 11 18-5v12L3 13z"/><path d="M11.6 14.6 13 21l-4-1-2-7M8 8l-4 1v4l4 1"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  alert:'<path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0z"/><path d="M12 9v4m0 4h.01"/>',
  message:'<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/>',
  briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8m-8 4h8"/>',
  wallet:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M16 15h.01M7 5V3h11v2"/>',
  arrowDown:'<path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 17v4h14v-4"/>',
  arrowUp:'<path d="M12 21V9m-5 5 5-5 5 5"/><path d="M5 7V3h14v4"/>',
  credit:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  receipt:'<path d="M4 2v20l4-2 4 2 4-2 4 2V2l-4 2-4-2-4 2z"/><path d="M8 9h8m-8 4h8"/>',
  chart:'<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/>',
  spark:'<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z"/><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2z"/>',
  shield:'<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="m9 12 2 2 4-4"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.6-1.4-2.4 1.4-1.1a8 8 0 0 1 0-1.9l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.6 1.4 2.4-1.4 1.1a8 8 0 0 1 0 1.8z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 13h4"/>',
  moon:'<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  plus:'<path d="M12 5v14m-7-7h14"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/>',
  trash:'<path d="M3 6h18m-2 0-.9 14H5.9L5 6m4 0V4h6v2m-5 4v7m4-7v7"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3"/>',
  print:'<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>',
  logout:'<path d="M10 17l5-5-5-5m5 5H3"/><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7"/>',
  menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  close:'<path d="m18 6-12 12M6 6l12 12"/>',
  clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  wifi:'<path d="M5 12.5a11 11 0 0 1 14 0M2 9a16 16 0 0 1 20 0m-17 7a6 6 0 0 1 10 0m-5 4h.01"/>',
  cloud:'<path d="M20 16.2A4.5 4.5 0 0 0 18 7h-1.3A6 6 0 1 0 5 16.3"/><path d="M8 16h8m-4-4v8"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4m-5 4v3"/>',
  help:'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3m.1 4h.01"/>',
  filter:'<path d="M4 7h16M7 12h10m-7 5h4"/>',
  refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9A7 7 0 0 1 18 6l2 6M4 12l2 6a7 7 0 0 0 12.4-3"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  calendarCheck:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18m4 6 2 2 4-4"/>',
  pin:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
  arrowRight:'<path d="M5 12h14m-7-7 7 7-7 7"/>',
  fileUp:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6m-3 3 3-3 3 3"/>',
  history:'<path d="M3 12a9 9 0 1 0 2.6-6.4L3 8"/><path d="M3 3v5h5m4-1v5l3 2"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z"/>',
  downloadCloud:'<path d="M12 13V3m-4 6 4 4 4-4"/><path d="M20 16.5A4.5 4.5 0 0 0 18 8h-1.3A6 6 0 1 0 5 17"/>',
  upload:'<path d="M12 16V4m-5 5 5-5 5 5"/><path d="M4 20h16"/>'
};
function icon(name,size=''){ return `<svg class="icon ${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name]||ICON_PATHS.file}</svg>`; }
const $ = (sel,root=document)=>root.querySelector(sel);
const $$ = (sel,root=document)=>Array.from(root.querySelectorAll(sel));
const root = document.getElementById('app');
const toastRegion = document.getElementById('toast-region');
const escapeHtml = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeValue = value => value===undefined||value===null?'':String(value);
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : 'id-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2));
const todayISO = () => {const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
const niceDate = value => { if(!value)return '—'; const d=new Date(value+'T00:00:00'); return isNaN(d)?escapeHtml(value):d.toLocaleDateString('ms-MY',{day:'2-digit',month:'short',year:'numeric'}); };
const formatMYR = amount => new Intl.NumberFormat('ms-MY',{style:'currency',currency:'MYR',minimumFractionDigits:2}).format(Number(amount)||0);
const titleCase = text => String(text||'').replace(/([A-Z])/g,' $1').replace(/^./,m=>m.toUpperCase());
const shortDateTime = value => { if(!value)return '—'; const d=new Date(value); return isNaN(d)?escapeHtml(value):d.toLocaleString('ms-MY',{dateStyle:'medium',timeStyle:'short'}); };

class LocalDB {
  constructor(){this.db=null;}
  open(){return new Promise((resolve,reject)=>{const req=indexedDB.open('uniki-v1-local',2);req.onupgradeneeded=()=>{const d=req.result;if(!d.objectStoreNames.contains('records')){const s=d.createObjectStore('records',{keyPath:'id'});s.createIndex('table','table',{unique:false});s.createIndex('updatedAt','updatedAt',{unique:false});}if(!d.objectStoreNames.contains('backups'))d.createObjectStore('backups',{keyPath:'id'});};req.onsuccess=()=>{this.db=req.result;resolve(this);};req.onerror=()=>reject(req.error||new Error('Pangkalan data setempat tidak dapat dibuka.'));});}
  all(table){return new Promise((resolve,reject)=>{const tx=this.db.transaction('records','readonly');const req=table?tx.objectStore('records').index('table').getAll(table):tx.objectStore('records').getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);});}
  get(table,id){return new Promise((resolve,reject)=>{const tx=this.db.transaction('records','readonly');const req=tx.objectStore('records').get(id);req.onsuccess=()=>resolve(req.result?.table===table?req.result:null);req.onerror=()=>reject(req.error);});}
  put(table,data){return new Promise((resolve,reject)=>{const tx=this.db.transaction('records','readwrite');const value={...data,id:data.id||uid(),table,updatedAt:new Date().toISOString(),createdAt:data.createdAt||new Date().toISOString()};const req=tx.objectStore('records').put(value);req.onsuccess=()=>resolve(value);req.onerror=()=>reject(req.error);});}
  remove(table,id){return new Promise((resolve,reject)=>{const tx=this.db.transaction('records','readwrite');const store=tx.objectStore('records');const get=store.get(id);get.onsuccess=()=>{if(get.result?.table===table)store.delete(id);};tx.oncomplete=()=>resolve(true);tx.onerror=()=>reject(tx.error);});}
  clearRecords(){return new Promise((resolve,reject)=>{const tx=this.db.transaction('records','readwrite');tx.objectStore('records').clear();tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});}
  replaceRecords(records){return new Promise((resolve,reject)=>{const tx=this.db.transaction('records','readwrite');const store=tx.objectStore('records');store.clear();for(const row of records){if(row&&row.id&&row.table)store.put(row);}tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});}
  async saveSnapshot(){const records=await this.all();const snapshot={id:uid(),createdAt:new Date().toISOString(),count:records.length,records};return new Promise((resolve,reject)=>{const tx=this.db.transaction('backups','readwrite');tx.objectStore('backups').put(snapshot);tx.oncomplete=()=>resolve(snapshot);tx.onerror=()=>reject(tx.error);});}
  listSnapshots(){return new Promise((resolve,reject)=>{const tx=this.db.transaction('backups','readonly');const req=tx.objectStore('backups').getAll();req.onsuccess=()=>resolve((req.result||[]).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)));req.onerror=()=>reject(req.error);});}
}
let db=null;
let currentUser=null;
let community={};
let roles=[];
let currentPage='dashboard';
let authMode='login';
let settingsTab='general';
let globalSearchValue='';
let listSearchValue='';
let tablePage=1;
const TABLE_PAGE_SIZE=25;
let reportFilter='summary';
let reportFrom='';
let reportTo='';
let installPrompt=null;
let sessionTimer=null;
let autoLogoutMinutes=30;

function toast(title,message='',kind='success'){
  if(!toastRegion)return;
  const el=document.createElement('div');el.className='toast '+kind;el.innerHTML=`<span>${icon(kind==='error'?'alert':kind==='warning'?'clock':'check')}</span><span><strong>${escapeHtml(title)}</strong>${message?`<small>${escapeHtml(message)}</small>`:''}</span>`;
  toastRegion.appendChild(el);setTimeout(()=>el.remove(),4300);
}
function roleDefaults(name){
  const all=()=>Object.fromEntries(PERMISSION_MODULES.map(m=>[m,[...ACTIONS]]));
  const none=()=>Object.fromEntries(PERMISSION_MODULES.map(m=>[m,[]]));
  if(name==='Owner')return all();
  const p=none();
  const set=(modules,actions)=>modules.forEach(m=>p[m]=[...actions]);
  if(name==='Administrator'){
    set(PERMISSION_MODULES.filter(m=>!['roles','sync'].includes(m)),['view','add','edit','delete','approve']);
    p.roles=['view'];p.sync=['view','add','edit'];return p;
  }
  if(name==='Manager'){
    set(['members','households','announcements','events','incidents','complaints','volunteers','meetings','documents','income','expenses','payments','receivedPayments','reports','audit'],['view','add','edit']);
    p.income.push('approve');p.expenses.push('approve');p.receivedPayments.push('approve');p.payments.push('approve');p.sync=['view'];return p;
  }
  if(name==='Committee'){
    set(['members','announcements','events','incidents','complaints','volunteers','meetings','documents','reports'],['view','add']);p.meetings.push('edit');p.incidents.push('edit');p.complaints.push('edit');return p;
  }
  if(name==='Moderator'){
    set(['members','announcements','events','incidents','complaints','volunteers'],['view','add','edit']);return p;
  }
  if(name==='Staff'){
    set(['members','announcements','events','incidents','complaints','volunteers','meetings','documents'],['view','add','edit']);return p;
  }
  if(name==='Member'){
    set(['announcements','events'],['view']);p.incidents=['view','add'];p.complaints=['view','add'];p.volunteers=['view','add'];p.payments=['view'];p.receivedPayments=['view'];p.ai=['view'];return p;
  }
  return p;
}
function isOwner(){return currentUser?.role==='Owner';}
function can(module,action='view'){
  if(!currentUser)return false;
  if(isOwner())return true;
  const role=roles.find(r=>r.name===currentUser.role);
  const list=role?.permissions?.[module]??roleDefaults(currentUser.role)[module]??[];
  return list.includes(action);
}
function guard(module,action){if(!can(module,action))throw new Error('Anda tidak mempunyai kebenaran untuk melakukan tindakan ini.');}
async function getSetting(key,fallback=null){const row=await db.get('settings',key);return row?row.value:fallback;}
async function setSetting(key,value){return db.put('settings',{id:key,key,value});}
async function loadWorkspace(){
  const c=(await db.all('communities'))[0];community=c||{};
  roles=await db.all('roles');
  if(!roles.length&&currentUser){await seedRoles();roles=await db.all('roles');}
  if(currentUser)await migrateApprovedReceipts();
}
async function migrateApprovedReceipts(){
  const migrationKey='receiptMigration-v1.2.0';if(await getSetting(migrationKey,false))return;
  if(!FINANCE_TABLES.every(module=>can(module,'view')))return;
  const prefix={income:'INC-RCPT',expenses:'EXP-RCPT',payments:'PAYRCPT',receivedPayments:'RCPT'};
  const eligible={income:['Approved','Posted'],expenses:['Approved','Posted'],payments:['Paid','Partial','Refunded','Verified','Disahkan'],receivedPayments:['Received','Partially Received','Fully Received','Refunded','Verified','Approved']};
  for(const module of FINANCE_TABLES){
    if(!can(module,'view'))continue;
    const rows=visibleRows(module,await db.all(module));
    for(const row of rows){
      if(!financeStatusApprovedBy(row)||!eligible[module].includes(row.status))continue;
      let changed=false;
      if(!row.receiptNo){row.receiptNo=await nextReference(module,prefix[module]);changed=true;}
      if(row.status==='Refunded'&&Number(row.refundAmount||0)>0&&!row.refundReceiptNo){row.refundReceiptNo=await nextReference(module,'REFUND');changed=true;}
      if(changed){await db.put(module,row);await writeAudit('Jana resit rasmi (pemas kini)',module,row.id,row.receiptNo,`Nombor resit rasmi dijana untuk rekod sedia ada versi ${APP_VERSION}.`);}
    }
  }
  await setSetting(migrationKey,true);
}
async function seedRoles(){for(const name of ROLE_NAMES){await db.put('roles',{id:'role-'+name.toLowerCase(),name,description:name==='Owner'?'Pemilik ruang kerja dan akses penuh.':`Peranan ${name} untuk pengurusan komuniti.`,permissions:roleDefaults(name),system:true});}}
function moduleForPage(page){if(FINANCE_TABLES.includes(page))return page;return ({finance:'reports',receipts:'receivedPayments',reports:'reports',dashboard:'dashboard',ai:'ai',users:'users',roles:'roles',audit:'audit',sync:'sync',settings:'settings'}[page]||page);}
function canOpen(page){if(page==='dashboard')return true;if(page==='finance')return can('reports','view')||FINANCE_TABLES.some(m=>can(m,'view'));if(page==='receipts')return FINANCE_TABLES.some(m=>can(m,'view'));if(page==='reports')return can('reports','view');return can(moduleForPage(page),'view');}
function visibleRows(table,rows){
  if(isOwner()||['Administrator','Manager'].includes(currentUser?.role))return rows;
  if(currentUser?.role==='Member'&&table==='announcements')return rows.filter(r=>(r.status==='Published'||r.status==='Scheduled'&&r.publishDate&&r.publishDate<=todayISO())&&(!r.publishDate||r.publishDate<=todayISO())&&(!r.expiryDate||r.expiryDate>=todayISO()));
  if(currentUser?.role==='Member'&&table==='events')return rows.filter(r=>['Published','Registration Open','Full','Completed'].includes(r.status)&&r.status!=='Cancelled'&&(!r.date||r.date>=todayISO()||r.status==='Completed'));
  if(table==='documents'){const elevated=['Owner','Administrator','Manager'].includes(currentUser?.role);return rows.filter(r=>elevated||r.access==='All members'||r.access==='Committee'&&['Committee','Staff','Moderator'].includes(currentUser?.role));}
  if(currentUser?.role==='Member'){
    if(table==='incidents'||table==='complaints')return rows.filter(r=>r.createdBy===currentUser.id||r.reporterId===currentUser.id);
    if(table==='payments'||table==='receivedPayments')return rows.filter(r=>r.payerUserId===currentUser.id||r.createdBy===currentUser.id);
    if(table==='eventParticipants')return rows.filter(r=>r.userId===currentUser.id);
    if(table==='users')return rows.filter(r=>r.id===currentUser.id);
  }
  return rows;
}
function initials(value='UN'){return String(value).trim().split(/\s+/).slice(0,2).map(x=>x[0]||'').join('').toUpperCase()||'UN';}
function communityLogoSrc(value=community.logoData){return typeof value==='string'&&/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+=*$/i.test(value)?value:'assets/uniki-logo.png';}
function statusClass(status=''){
  const s=String(status).toLowerCase();
  if(/active|published|completed|resolved|verified|approved|posted|paid|attended|received|registered/.test(s))return 'green';
  if(/progress|open|draft|scheduled|new|pending|waiting|registration/.test(s))return 'orange';
  if(/cancel|failed|closed|inactive|overdue|not attended|refund|reject|unpaid/.test(s))return 'red';
  if(/partial|full|accepted/.test(s))return 'blue';return 'gray';
}
function statusPill(status){const label=STATUS_LABELS[status]||status||'—';return `<span class="status-pill ${statusClass(status)}">${escapeHtml(label)}</span>`;}
function receivedAmount(row={}){
  const explicit=row.receivedAmount!==undefined&&row.receivedAmount!==null&&String(row.receivedAmount).trim()!=='';
  if(explicit)return Math.max(0,Number(row.receivedAmount)||0);
  return ['Verified','Received','Approved','Fully Received','Partially Received','Refunded'].includes(row.status)?Math.max(0,Number(row.amount)||0):0;
}
function paidAmount(row={}){
  const explicit=row.paidAmount!==undefined&&row.paidAmount!==null&&String(row.paidAmount).trim()!=='';
  if(explicit)return Math.max(0,Number(row.paidAmount)||0);
  return ['Paid','Verified','Disahkan','Partial','Refunded'].includes(row.status)?Math.max(0,Number(row.amount)||0):0;
}
function netReceivedAmount(row={}){const refundApproved=row.status==='Refunded'&&financeStatusApprovedBy(row);return Math.max(0,receivedAmount(row)-(refundApproved?Math.max(0,Number(row.refundAmount)||0):0));}
function netPaidAmount(row={}){const refundApproved=row.status==='Refunded'&&financeStatusApprovedBy(row);return Math.max(0,paidAmount(row)-(refundApproved?Math.max(0,Number(row.refundAmount)||0):0));}
function receivedReceiptEligible(row={}){return !!row.receiptNo&&financeStatusApprovedBy(row);}
function paymentReceiptEligible(row={}){return !!row.receiptNo&&financeStatusApprovedBy(row);}
function canDeleteFinanceRow(module,row={}){if(!FINANCE_TABLES.includes(module))return true;if(['income','expenses'].includes(module)&&['Approved','Posted'].includes(row.status))return false;return !row.receiptNo&&!row.refundReceiptNo&&paidAmount(row)===0&&receivedAmount(row)===0;}
function canCancelFinanceRow(module,row={}){
  if(!['payments','receivedPayments'].includes(module)||row.status==='Cancelled'||row.status==='Rejected'||row.status==='Refunded'||row.refundReceiptNo)return false;
  if(Number(row.refundAmount||0)>0)return false;
  const pendingUnconfirmed=!row.receiptNo&&!financeStatusApprovedBy(row)&&['Pending Approval','Pending Verification'].includes(row.status);
  if(pendingUnconfirmed)return true;
  if(module==='payments'&&paidAmount(row)>0)return false;
  if(module==='receivedPayments'&&receivedAmount(row)>0)return false;
  return ['Pending Payment','Awaiting Payment','Unpaid','Overdue','Pending Approval','Pending Verification'].includes(row.status);
}
function lastNoteCount(row={}){return Array.isArray(row.notes)?row.notes.length:0;}
function isAnnouncementVisibleNow(a){return (a.status==='Published'||a.status==='Scheduled'&&a.publishDate&&a.publishDate<=todayISO())&&(!a.publishDate||a.publishDate<=todayISO())&&(!a.expiryDate||a.expiryDate>=todayISO());}
function moduleTableTitle(module){return MODULE_LABELS[module]||PAGE_META[module]?.[0]||module;}

async function init(){
  try{db=await new LocalDB().open();}catch(err){root.innerHTML=`<main class="auth-panel"><div class="auth-card"><h2>Pangkalan data tidak tersedia</h2><p class="auth-subtitle">UNIKI memerlukan pelayar moden dengan IndexedDB diaktifkan. Cuba buka semula dalam Chrome, Edge atau Firefox terkini.</p><div class="danger-callout">${escapeHtml(err.message||'Ralat pangkalan data.')}</div></div></main>`;return;}
  autoLogoutMinutes=Number(await getSetting('autoLogoutMinutes',30));document.addEventListener('pointerdown',resetAutoLogoutTimer,{passive:true});document.addEventListener('keydown',resetAutoLogoutTimer);document.addEventListener('input',resetAutoLogoutTimer,true);
  if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
  document.addEventListener('click',handleClick);
  root.addEventListener('submit',handleSubmit);
  root.addEventListener('change',handleChange);
  root.addEventListener('keydown',handleKeydown);
  window.addEventListener('online',()=>updateNetworkLabel());window.addEventListener('offline',()=>updateNetworkLabel());
  const users=await db.all('users');
  const saved=sessionStorage.getItem('uniki-user')||localStorage.getItem('uniki-user');
  if(saved){const found=await db.get('users',saved);if(found){currentUser=found;await loadWorkspace();applyTheme(await getSetting('theme','light'));await renderApp();return;}sessionStorage.removeItem('uniki-user');localStorage.removeItem('uniki-user');}
  authMode=users.length?'login':'setup';await renderAuth();
}
function applyTheme(theme,contrast=document.body.classList.contains('high-contrast')){document.body.classList.toggle('theme-dark',theme==='dark');document.body.classList.toggle('high-contrast',!!contrast);}
function resetAutoLogoutTimer(){if(sessionTimer)clearTimeout(sessionTimer);sessionTimer=null;if(!currentUser||!autoLogoutMinutes)return;sessionTimer=setTimeout(()=>logout(),autoLogoutMinutes*60*1000);}
function authShell(content){return `<main class="auth-shell"><section class="auth-showcase"><div class="auth-brand"><img src="assets/uniki-logo.png" alt="Logo UNIKI"><div><strong>UNIKI V.1</strong><small>DIGITAL COMMUNITY PLATFORM</small></div></div><div class="auth-hero"><span class="eyebrow">Connect · Share · Belong</span><h1>Komuniti lebih dekat.<br>Urus lebih mudah.</h1><p>Satu ruang digital untuk menghubungkan ahli, menyelaras aktiviti dan membina komuniti yang lebih aktif — dengan data yang kekal pada peranti anda.</p><div class="auth-features"><div class="auth-feature"><span class="feature-icon">${icon('users')}</span><span>Ahli & penglibatan komuniti</span></div><div class="auth-feature"><span class="feature-icon">${icon('calendar')}</span><span>Acara, mesyuarat & tugasan</span></div><div class="auth-feature"><span class="feature-icon">${icon('wallet')}</span><span>Rekod kewangan telus</span></div><div class="auth-feature"><span class="feature-icon">${icon('lock')}</span><span>Local-first · boleh offline</span></div></div></div><div class="auth-footer">UNIKI V.1 &nbsp;·&nbsp; COMMUNITY · CONNECTION · PARTICIPATION</div></section><section class="auth-panel"><div class="auth-card"><div class="auth-mobile-logo"><img src="assets/uniki-logo.png" alt="Logo UNIKI"><div><strong>UNIKI V.1</strong><small>Connect · Share · Belong</small></div></div>${content}</div></section></main>`;}
async function renderAuth(){
  const users=await db.all('users');if(users.length&&authMode==='setup')authMode='login';
  if(authMode==='setup'){
    root.innerHTML=authShell(`<span class="eyebrow">Persediaan kali pertama</span><h2>Bina ruang komuniti</h2><p class="auth-subtitle">Daftarkan komuniti dan akaun Owner. Akaun pertama akan menerima akses penuh.</p><form class="form-stack" id="setup-form"><div class="form-field"><label for="communityName">Nama komuniti *</label><input id="communityName" name="communityName" required maxlength="100" placeholder="Contoh: Komuniti Harmoni"></div><div class="form-field"><label for="ownerName">Nama penuh Owner *</label><input id="ownerName" name="ownerName" required maxlength="100" placeholder="Nama anda"></div><div class="form-field"><label for="ownerEmail">Email *</label><input id="ownerEmail" name="email" type="email" required autocomplete="email" placeholder="nama@email.com"></div><div class="form-field"><label for="ownerPhone">No. telefon</label><input id="ownerPhone" name="phone" inputmode="tel" placeholder="+60 12 345 6789"></div><div class="form-field"><label for="ownerUsername">Username *</label><input id="ownerUsername" name="username" required minlength="3" autocomplete="username" placeholder="username"></div><div class="form-field"><label for="setupPassword">Password *</label><div class="password-wrap"><input id="setupPassword" name="password" type="password" required minlength="8" autocomplete="new-password" placeholder="Sekurang-kurangnya 8 aksara"><button class="password-toggle" type="button" data-action="show-pass" data-target="setupPassword">Papar</button></div></div><div class="form-field"><label for="setupPassword2">Sahkan password *</label><input id="setupPassword2" name="password2" type="password" required minlength="8" autocomplete="new-password" placeholder="Taip semula password"></div><div class="form-field"><label for="recoveryKey">Kunci pemulihan *</label><input id="recoveryKey" name="recoveryKey" required minlength="6" autocomplete="off" placeholder="Frasa rahsia sekurang-kurangnya 6 aksara"><small class="security-copy">Simpan kunci ini di tempat selamat. Ia diperlukan untuk menetapkan semula kata laluan pada peranti ini.</small></div><button class="btn btn-primary btn-block" type="submit">Cipta ruang komuniti ${icon('arrowRight')}</button></form><div class="auth-note"><strong>Privasi setempat.</strong> Akaun dan data disimpan dalam storan pelayar peranti ini. Gunakan backup yang disulitkan untuk pemindahan atau pemulihan.</div>`);
    return;
  }
  if(authMode==='forgot'){
    root.innerHTML=authShell(`<span class="eyebrow">Pemulihan setempat</span><h2>Tetapkan password baharu</h2><p class="auth-subtitle">Pengesahan dibuat menggunakan kunci pemulihan yang disimpan pada peranti ini. Tiada email dihantar.</p><form class="form-stack" id="forgot-form"><div class="form-field"><label for="forgotIdentity">Email atau username *</label><input id="forgotIdentity" name="identity" required autocomplete="username"></div><div class="form-field"><label for="forgotKey">Kunci pemulihan *</label><input id="forgotKey" name="recoveryKey" type="password" required autocomplete="off"></div><div class="form-field"><label for="newPassword">Password baharu *</label><input id="newPassword" name="password" type="password" required minlength="8" autocomplete="new-password"></div><div class="form-field"><label for="newPassword2">Sahkan password baharu *</label><input id="newPassword2" name="password2" type="password" required minlength="8" autocomplete="new-password"></div><button class="btn btn-primary btn-block" type="submit">Sahkan & kemas kini password</button></form><div class="auth-switch"><button class="text-button" data-action="auth-login">Kembali ke log masuk</button></div>`);return;
  }
  root.innerHTML=authShell(`<span class="eyebrow">Selamat kembali</span><h2>Log masuk ke UNIKI</h2><p class="auth-subtitle">Sambung mengurus komuniti anda.</p><form class="form-stack" id="login-form"><div class="form-field"><label for="loginIdentity">Email atau username *</label><input id="loginIdentity" name="identity" required autocomplete="username" placeholder="Email atau username"></div><div class="form-field"><label for="loginPassword">Password *</label><div class="password-wrap"><input id="loginPassword" name="password" type="password" required autocomplete="current-password" placeholder="Password anda"><button class="password-toggle" type="button" data-action="show-pass" data-target="loginPassword">Papar</button></div></div><div class="auth-actions"><label class="checkline"><input type="checkbox" name="remember" checked> Ingat saya pada peranti ini</label><button class="text-button" type="button" data-action="auth-forgot">Lupa password?</button></div><button class="btn btn-primary btn-block" type="submit">Log masuk ${icon('arrowRight')}</button></form><div class="auth-note"><strong>Local-first.</strong> Log masuk tersedia pada peranti yang menyimpan pangkalan data ini. Gunakan backup tersulit untuk memindahkan workspace.</div><p class="security-copy" style="margin-top:15px">Belum ada workspace? Akaun pertama dibuat melalui persediaan kali pertama.</p>`);
}
function layoutNav(){
  const groups=[
    ['COMMUNITY',[['dashboard','home','Dashboard'],['members','users','Ahli'],['households','family','Isi rumah'],['announcements','megaphone','Pengumuman'],['events','calendar','Acara & aktiviti']]],
    ['ENGAGEMENT',[['volunteers','heart','Sukarelawan'],['incidents','alert','Laporan kejadian'],['complaints','message','Aduan & maklum balas']]],
    ['MANAGEMENT',[['meetings','briefcase','Mesyuarat'],['documents','file','Dokumen']]],
    ['FINANCE',[['finance','wallet','Kewangan'],['income','arrowDown','Pendapatan'],['expenses','arrowUp','Perbelanjaan'],['payments','credit','Bayar'],['receivedPayments','receipt','Terima bayaran'],['receipts','receipt','Resit rasmi'],['reports','chart','Pusat laporan']]],
    ['AI & SYSTEM',[['ai','spark','UNIKI AI Helper'],['users','users','Pengguna'],['roles','shield','Peranan & kebenaran'],['audit','history','Jejak audit'],['sync','wifi','Backup & Sync'],['settings','settings','Tetapan']]]
  ];
  const unread=(window._unreadCount||0);
  return groups.map(([label,items])=>{const visible=items.filter(([page])=>canOpen(page));if(!visible.length)return '';return `<div class="nav-group"><div class="nav-group-label">${label}</div>${visible.map(([page,ico,name])=>`<button class="nav-item ${currentPage===page?'active':''}" data-route="${page}">${icon(ico)}<span>${name}</span>${page==='announcements'&&unread?`<span class="nav-badge">${unread}</span>`:''}</button>`).join('')}</div>`;}).join('');
}
async function renderApp(){
  if(!currentUser){await renderAuth();return;}
  await loadWorkspace();applyTheme(await getSetting('theme','light'),await getSetting('highContrast',false));resetAutoLogoutTimer();
  if(!canOpen(currentPage))currentPage='dashboard';
  const unreadRows=visibleRows('announcements',await db.all('announcements'));const unreadCount=unreadRows.filter(a=>isAnnouncementVisibleNow(a)&&!(a.readBy||[]).includes(currentUser.id)).length;window._unreadCount=unreadCount;
  const meta=PAGE_META[currentPage]||PAGE_META.dashboard;
  const activeTitle=currentPage==='finance'?'Kewangan':meta[0];
  const net=typeof navigator!=='undefined'&&navigator.onLine;
  const mobileTabs=[['dashboard','home','Home'],['members','users','Ahli'],['events','calendar','Acara'],['finance','wallet','Finance'],['more','more','Lagi']].filter(([page])=>page==='more'||canOpen(page));
  root.innerHTML=`<div class="app-shell"><aside class="sidebar" id="sidebar"><div class="side-brand"><img src="assets/uniki-logo.png" alt="Logo UNIKI"><div><strong>UNIKI V.1</strong><small>COMMUNITY PLATFORM</small></div></div><div class="workspace-chip"><span class="workspace-avatar">${escapeHtml(initials(community.name||'UN'))}</span><span class="workspace-meta"><strong>${escapeHtml(community.name||'Komuniti')}</strong><small>${escapeHtml(currentUser.role||'Member')} workspace</small></span><span style="color:#6f87a8">${icon('more','sm')}</span></div><nav class="nav-scroll" aria-label="Navigasi utama">${layoutNav()}</nav><div class="sidebar-bottom"><div class="profile-mini"><span class="profile-avatar">${escapeHtml(initials(currentUser.name))}</span><span class="profile-copy"><strong>${escapeHtml(currentUser.name)}</strong><small>${escapeHtml(currentUser.role)}</small></span><button class="btn-icon" title="Log keluar" aria-label="Log keluar" data-action="logout">${icon('logout','sm')}</button></div></div></aside><div class="mobile-overlay" id="mobile-overlay" data-action="close-menu"></div><section class="main-shell"><header class="topbar"><button class="btn-icon only-mobile" data-action="open-menu" aria-label="Buka menu">${icon('menu')}</button><div class="topbar-title"><div class="crumb">UNIKI / ${escapeHtml(activeTitle)}</div><strong>${escapeHtml(activeTitle)}</strong></div><form class="global-search" id="global-search-form" role="search"><span>${icon('search')}</span><input name="query" aria-label="Carian seluruh komuniti" placeholder="Cari dalam UNIKI..." value="${escapeHtml(globalSearchValue)}"></form><div class="topbar-tools"><span class="network-pill" id="network-pill"><span class="network-dot" style="${net?'':'background:#e6a33e;box-shadow:none'}"></span><span>${net?'ONLINE':'OFFLINE'}</span></span><button class="btn-icon" data-action="notifications" aria-label="Notifikasi" title="Notifikasi">${icon('bell')}${unreadCount?`<span class="nav-badge" style="position:absolute;margin:-22px 0 0 18px">${unreadCount}</span>`:''}</button><button class="btn-icon" data-action="toggle-theme" aria-label="Tukar tema" title="Tukar tema">${icon(document.body.classList.contains('theme-dark')?'sun':'moon')}</button><button class="btn-icon only-mobile" data-action="logout" aria-label="Log keluar">${icon('logout')}</button></div></header><main class="main-content" id="main-content"><div class="page-wrap">${await renderPage(currentPage)}</div></main><nav class="mobile-nav" aria-label="Navigasi mudah alih">${mobileTabs.map(([page,ico,label])=>page==='more'?`<button data-action="open-menu">${icon(ico)}<span>${label}</span></button>`:`<button data-route="${page}" class="${currentPage===page?'active':''}">${icon(ico)}<span>${label}</span></button>`).join('')}</nav></section></div>`;
}
function pageHead(title,desc,actions=''){return `<div class="page-head"><div><h1>${escapeHtml(title)}</h1><p>${escapeHtml(desc||'')}</p></div>${actions?`<div class="head-actions">${actions}</div>`:''}</div>`;}
async function renderPage(page){
  if(!canOpen(page))return `<div class="panel empty-state"><span class="empty-illustration">${icon('lock','xl')}</span><strong>Akses tidak dibenarkan</strong><p>Anda tidak mempunyai kebenaran untuk melihat modul ini.</p></div>`;
  if(page==='dashboard')return renderDashboard();
  if(page==='finance')return renderFinance();
  if(page==='reports')return renderReports();
  if(page==='receipts')return renderReceipts();
  if(page==='ai')return renderAI();
  if(page==='users')return renderUsers();
  if(page==='roles')return renderRoles();
  if(page==='audit')return renderAudit();
  if(page==='sync')return renderSync();
  if(page==='settings')return renderSettings();
  if(FINANCE_TABLES.includes(page)||TABLE_CONFIG[page])return renderTablePage(page);
  return renderDashboard();
}
async function renderDashboard(){
  const members=can('members','view')?visibleRows('members',await db.all('members')):[];
  const events=can('events','view')?visibleRows('events',await db.all('events')).filter(e=>e.status!=='Draft'&&e.status!=='Cancelled'):[];
  const incidents=can('incidents','view')?visibleRows('incidents',await db.all('incidents')).filter(r=>!['Resolved','Closed','Selesai','Ditutup'].includes(r.status)):[];
  const complaints=can('complaints','view')?visibleRows('complaints',await db.all('complaints')).filter(r=>!['Resolved','Closed','Selesai','Ditutup'].includes(r.status)):[];
  const volunteers=can('volunteers','view')?visibleRows('volunteers',await db.all('volunteers')):[];
  const ann=can('announcements','view')?visibleRows('announcements',await db.all('announcements')).filter(isAnnouncementVisibleNow).sort((a,b)=>(b.publishDate||'').localeCompare(a.publishDate||'')):[];
  const incomes=can('income','view')?visibleRows('income',await db.all('income')):[];const expenses=can('expenses','view')?visibleRows('expenses',await db.all('expenses')):[];const rec=can('receivedPayments','view')?visibleRows('receivedPayments',await db.all('receivedPayments')):[];const payments=can('payments','view')?visibleRows('payments',await db.all('payments')):[];
  const approvedInc=incomes.filter(x=>['Approved','Posted'].includes(x.status)).reduce((s,x)=>s+Number(x.amount||0),0);
  const received=rec.filter(x=>['Verified','Received','Approved','Partially Received','Fully Received','Refunded'].includes(x.status)).reduce((s,x)=>s+netReceivedAmount(x),0);
  const outExp=expenses.filter(x=>['Approved','Posted'].includes(x.status)).reduce((s,x)=>s+Number(x.amount||0),0);
  const paid=payments.filter(x=>['Paid','Verified','Disahkan','Partial','Refunded'].includes(x.status)).reduce((s,x)=>s+netPaidAmount(x),0);
  const upcoming=events.filter(e=>e.date>=todayISO()&&!['Cancelled','Completed'].includes(e.status)).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,4);
  const audit=can('audit','view')?await db.all('audit'):[];
  const latest=audit.sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||'')).slice(0,5);
  const stats=[
    {label:'Jumlah ahli',value:can('members','view')?members.length:'—',foot:`${members.filter(m=>m.status==='Active').length} ahli aktif`,ico:'users',color:''},
    {label:'Acara akan datang',value:can('events','view')?upcoming.length:'—',foot:'Dalam kalendar komuniti',ico:'calendar',color:'blue'},
    {label:'Kejadian terbuka',value:can('incidents','view')?incidents.length:'—',foot:`${complaints.length} aduan aktif`,ico:'alert',color:'orange'},
    {label:'Baki semasa',value:FINANCE_TABLES.every(t=>can(t,'view'))?formatMYR(approvedInc+received-outExp-paid):'—',foot:'Pendapatan + kutipan − aliran keluar',ico:'wallet',color:'pink'}
  ];
  const quick=[['members','Tambah ahli','users'],['events','Cipta acara','calendar'],['announcements','Buat pengumuman','megaphone'],['incidents','Lapor kejadian','alert']].filter(([p])=>can(p,'add'));
  return `<section class="welcome-banner"><div class="welcome-copy"><span class="eyebrow">${escapeHtml(new Date().toLocaleDateString('ms-MY',{weekday:'long',day:'numeric',month:'long',year:'numeric'}))}</span><h1>Hai, ${escapeHtml(currentUser.name.split(' ')[0])} 👋</h1><p>${escapeHtml(community.name||'Komuniti anda')} — satu platform untuk mengurus, berhubung dan berkembang bersama. Berikut ringkasan komuniti anda.</p></div>${can('ai','view')?`<div class="welcome-actions"><button class="btn" data-route="ai">${icon('spark')} Tanya UNIKI AI</button></div>`:''}</section>
  <div class="stat-grid">${stats.map(s=>`<article class="stat-card"><div class="stat-top"><span class="stat-label">${s.label}</span><span class="stat-icon ${s.color}">${icon(s.ico)}</span></div><div class="stat-value">${escapeHtml(String(s.value))}</div><div class="stat-foot">${escapeHtml(s.foot)}</div></article>`).join('')}</div>
  <section class="dash-columns"><div class="panel"><div class="panel-head"><h2>Aktiviti terkini</h2>${can('audit','view')?`<button data-route="audit">Lihat jejak audit ${icon('arrowRight','sm')}</button>`:''}</div>${latest.length?`<div class="activity-list">${latest.map(a=>`<div class="activity-item"><span class="activity-dot">${icon(a.icon||'history','sm')}</span><span><strong>${escapeHtml(a.action||'Aktiviti')}</strong><small>${escapeHtml(a.userName||'Pengguna')} · ${escapeHtml(a.moduleName||'Sistem')} · ${escapeHtml(shortDateTime(a.createdAt))}</small></span></div>`).join('')}</div>`:`<div class="empty-state"><span class="empty-illustration">${icon('spark','xl')}</span><strong>Ruang anda sedia digunakan</strong><p>Mula dengan menambah ahli, menerbitkan pengumuman atau menjadualkan aktiviti komuniti.</p><div class="quick-actions" style="margin-top:13px">${quick.slice(0,3).map(([p,l,i])=>`<button class="btn btn-secondary btn-small" data-action="quick-add" data-module="${p}">${icon(i,'sm')}${l}</button>`).join('')}</div></div>`}</div><div class="panel"><div class="panel-head"><h2>Acara akan datang</h2>${can('events','view')?`<button data-route="events">Semua acara ${icon('arrowRight','sm')}</button>`:''}</div>${upcoming.length?`<div class="upcoming-list">${upcoming.map(e=>{const d=new Date((e.date||todayISO())+'T00:00:00');return `<div class="event-mini"><span class="event-date"><b>${d.getDate()}</b><small>${d.toLocaleDateString('ms-MY',{month:'short'})}</small></span><span class="event-mini-copy"><strong>${escapeHtml(e.title)}</strong><small>${escapeHtml(e.time||'Masa belum ditetapkan')} · ${escapeHtml(e.location||'Lokasi belum ditetapkan')}</small></span></div>`}).join('')}</div>`:`<div class="empty-state"><span class="empty-illustration">${icon('calendar','xl')}</span><strong>Tiada acara dijadualkan</strong><p>Acara yang diterbitkan akan dipaparkan di sini.</p>${can('events','add')?`<button class="btn btn-primary btn-small" style="margin-top:12px" data-action="quick-add" data-module="events">${icon('plus','sm')} Cipta acara</button>`:''}</div>`}</div></section>
  ${can('announcements','view')?`<section class="panel" style="margin-top:14px"><div class="panel-head"><h2>Pengumuman terkini</h2><button data-route="announcements">Semua pengumuman ${icon('arrowRight','sm')}</button></div>${ann.length?`<div class="activity-list">${ann.slice(0,3).map(a=>`<button class="activity-item" style="width:100%;text-align:left;border:0;background:transparent" data-action="view-record" data-module="announcements" data-id="${a.id}"><span class="activity-dot">${icon('megaphone','sm')}</span><span><strong>${escapeHtml(a.title)}</strong><small>${escapeHtml(a.category||'Umum')} · ${niceDate(a.publishDate)}</small></span></button>`).join('')}</div>`:`<div class="empty-state"><strong>Belum ada pengumuman diterbitkan</strong><p>Pengumuman komuniti akan dipaparkan di sini.</p></div>`}</section>`:''}
  <section class="panel" style="margin-top:15px"><div class="panel-head"><h2>Tindakan pantas</h2><span class="muted">Pintasan modul yang kerap digunakan</span></div><div class="quick-actions">${quick.length?quick.map(([p,l,i])=>`<button class="btn btn-secondary btn-small" data-action="quick-add" data-module="${p}">${icon(i,'sm')}${l}</button>`).join(''):`<span class="visibility-note">Tiada tindakan tambah diberikan untuk peranan anda.</span>`}${can('reports','view')?`<button class="btn btn-secondary btn-small" data-route="reports">${icon('chart','sm')} Pusat laporan</button>`:''}${can('sync','view')?`<button class="btn btn-secondary btn-small" data-route="sync">${icon('downloadCloud','sm')} Backup / Sync</button>`:''}</div></section>`;
}

const field=(key,label,type='text',extra={})=>({key,label,type,...extra});
const methods=['Tunai','Bank Transfer','DuitNow','QR Payment','Kad','Online Payment','Lain-lain'];
const PAYMENT_STATUS_OPTIONS=[
  {value:'Pending Payment',label:'Menunggu Pembayaran'},
  {value:'Unpaid',label:'Belum Dibayar'},
  {value:'Partial',label:'Bayaran Sebahagian'},
  {value:'Overdue',label:'Bayaran Lewat'},
  {value:'Paid',label:'Sudah Dibayar'},
  {value:'Cancelled',label:'Dibatalkan'},
  {value:'Refunded',label:'Bayaran Dikembalikan (Refund)'}
];
const RECEIVED_STATUS_OPTIONS=[
  {value:'Pending Verification',label:'Menunggu Pengesahan'},
  {value:'Pending Payment',label:'Menunggu Bayaran'},
  {value:'Partially Received',label:'Bayaran Sebahagian Diterima'},
  {value:'Received',label:'Bayaran Diterima'},
  {value:'Fully Received',label:'Bayaran Penuh Diterima'},
  {value:'Rejected',label:'Bayaran Ditolak'},
  {value:'Refunded',label:'Bayaran Dikembalikan'}
];
const TABLE_CONFIG={
  members:{title:'Ahli komuniti',singular:'ahli',desc:PAGE_META.members[1],icon:'users',fields:[field('name','Nama penuh','text',{required:true}),field('memberNo','No. ahli','text',{placeholder:'Auto jika dibiarkan kosong'}),field('category','Kategori','select',{options:['Penduduk','Ahli persatuan','Sukarelawan','Pelajar','Lain-lain'],default:'Penduduk'}),field('phone','No. telefon','tel'),field('email','Email','email'),field('household','Isi rumah / keluarga','text'),field('relation','Hubungan keluarga','select',{options:['Ketua keluarga','Pasangan','Anak','Ahli keluarga lain','Tidak berkaitan'],default:'Tidak berkaitan'}),field('location','Alamat / kawasan','text'),field('joined','Tarikh menyertai','date',{default:todayISO()}),field('status','Status ahli','select',{options:['Active','Inactive'],default:'Active'}),field('note','Nota','textarea',{wide:true})],columns:[{key:'name',label:'Ahli',sub:'memberNo'},{key:'category',label:'Kategori'},{key:'phone',label:'Telefon'},{key:'location',label:'Kawasan'},{key:'joined',label:'Menyertai',type:'date'},{key:'status',label:'Status',type:'status'}]},
  households:{title:'Isi rumah',singular:'isi rumah',desc:PAGE_META.households[1],icon:'family',fields:[field('name','Nama keluarga / isi rumah','text',{required:true}),field('head','Ketua keluarga','text',{required:true}),field('phone','Telefon utama','tel'),field('address','Alamat','textarea',{wide:true}),field('area','Kawasan','text'),field('note','Nota','textarea',{wide:true})],columns:[{key:'name',label:'Isi rumah',sub:'address'},{key:'head',label:'Ketua keluarga'},{key:'phone',label:'Telefon'},{key:'area',label:'Kawasan'},{key:'memberCount',label:'Ahli'}]},
  announcements:{title:'Pengumuman',singular:'pengumuman',desc:PAGE_META.announcements[1],icon:'megaphone',fields:[field('title','Tajuk','text',{required:true}),field('category','Kategori','select',{options:['Umum','Penting','Aktiviti','Kecemasan','Komuniti','Kewangan','Lain-lain'],default:'Umum'}),field('priority','Keutamaan','select',{options:['Normal','Penting','Kecemasan'],default:'Normal'}),field('publishDate','Tarikh terbit','date',{default:todayISO()}),field('expiryDate','Tarikh luput','date'),field('status','Status','select',{options:['Draft','Scheduled','Published'],default:'Draft'}),field('body','Kandungan','textarea',{required:true,wide:true}),field('attachment','Lampiran (PDF / imej)','file',{wide:true})],columns:[{key:'title',label:'Pengumuman',sub:'category'},{key:'priority',label:'Keutamaan'},{key:'publishDate',label:'Tarikh',type:'date'},{key:'status',label:'Status',type:'status'}]},
  events:{title:'Acara & aktiviti',singular:'acara',desc:PAGE_META.events[1],icon:'calendar',fields:[field('title','Nama acara','text',{required:true}),field('date','Tarikh','date',{required:true,default:todayISO()}),field('time','Masa','text',{placeholder:'Contoh: 09:00 pagi'}),field('location','Lokasi','text',{required:true}),field('organizer','Penganjur','text'),field('capacity','Kapasiti peserta','number',{min:1,step:1}),field('fee','Yuran (RM)','number',{min:0,step:0.01}),field('status','Status','select',{options:['Draft','Published','Registration Open','Full','Completed','Cancelled'],default:'Draft'}),field('description','Penerangan','textarea',{wide:true})],columns:[{key:'title',label:'Acara',sub:'location'},{key:'date',label:'Tarikh',type:'date'},{key:'time',label:'Masa'},{key:'registrations',label:'Peserta'},{key:'status',label:'Status',type:'status'}]},
  incidents:{title:'Laporan kejadian',singular:'laporan kejadian',desc:PAGE_META.incidents[1],icon:'alert',fields:[field('title','Tajuk kejadian','text',{required:true}),field('category','Kategori','select',{options:['Keselamatan','Kerosakan','Fasiliti','Gangguan','Kemalangan','Kebersihan','Isu komuniti','Lain-lain'],default:'Isu komuniti'}),field('location','Lokasi','text',{required:true}),field('reportedAt','Tarikh kejadian','date',{default:todayISO()}),field('time','Masa','text'),field('reporter','Nama pelapor','text',{default:()=>currentUser?.name}),field('assignedTo','Ditugaskan kepada','text'),field('status','Status','select',{options:['New','In Progress','Resolved','Closed'],default:'New'}),field('priority','Keutamaan','select',{options:['Normal','Penting','Kecemasan'],default:'Normal'}),field('description','Penerangan / tindakan','textarea',{required:true,wide:true}),field('attachment','Gambar / lampiran','file',{wide:true})],columns:[{key:'caseNo',label:'Rujukan'},{key:'title',label:'Kejadian',sub:'category'},{key:'location',label:'Lokasi'},{key:'reporter',label:'Pelapor'},{key:'status',label:'Status',type:'status'},{key:'createdAt',label:'Dilapor',type:'datetime'}]},
  complaints:{title:'Aduan & maklum balas',singular:'aduan / maklum balas',desc:PAGE_META.complaints[1],icon:'message',fields:[field('title','Tajuk','text',{required:true}),field('type','Jenis','select',{options:['Aduan','Cadangan','Maklum balas','Pertanyaan'],default:'Aduan'}),field('submitted','Tarikh','date',{default:todayISO()}),field('owner','Pegawai susulan','text'),field('status','Status','select',{options:['New','Received','In Progress','Waiting','Resolved','Closed'],default:'New'}),field('description','Butiran','textarea',{required:true,wide:true}),field('internalNote','Nota dalaman','textarea',{wide:true}),field('attachment','Lampiran','file',{wide:true})],columns:[{key:'reference',label:'Rujukan'},{key:'title',label:'Perkara',sub:'type'},{key:'submitted',label:'Tarikh',type:'date'},{key:'owner',label:'PIC'},{key:'status',label:'Status',type:'status'}]},
  volunteers:{title:'Sukarelawan',singular:'sukarelawan',desc:PAGE_META.volunteers[1],icon:'heart',fields:[field('name','Nama sukarelawan','text',{required:true}),field('phone','No. telefon','tel'),field('email','Email','email'),field('skills','Kemahiran','text',{placeholder:'Contoh: pertolongan cemas, fotografi'}),field('interests','Minat / program','text'),field('availability','Ketersediaan','text'),field('hours','Jam sukarelawan','number',{min:0,step:0.5,default:0}),field('status','Status','select',{options:['Active','Inactive'],default:'Active'}),field('note','Nota penyertaan','textarea',{wide:true})],columns:[{key:'name',label:'Sukarelawan',sub:'phone'},{key:'skills',label:'Kemahiran'},{key:'interests',label:'Minat'},{key:'availability',label:'Ketersediaan'},{key:'hours',label:'Jam'},{key:'status',label:'Status',type:'status'}]},
  meetings:{title:'Mesyuarat & tugasan',singular:'mesyuarat',desc:PAGE_META.meetings[1],icon:'briefcase',fields:[field('title','Tajuk mesyuarat','text',{required:true}),field('date','Tarikh','date',{required:true,default:todayISO()}),field('time','Masa','text'),field('location','Lokasi / pautan','text'),field('attendees','Peserta (asingkan koma)','text'),field('status','Status','select',{options:['Scheduled','In Progress','Completed','Cancelled'],default:'Scheduled'}),field('agenda','Agenda','textarea',{wide:true}),field('minutes','Minit / keputusan','textarea',{wide:true}),field('actionItems','Tindakan, PIC dan tarikh akhir','textarea',{wide:true,placeholder:'Satu tindakan setiap baris, contohnya: Hubungi vendor — Aina — 2026-11-10'})],columns:[{key:'title',label:'Mesyuarat',sub:'location'},{key:'date',label:'Tarikh',type:'date'},{key:'time',label:'Masa'},{key:'attendees',label:'Peserta'},{key:'status',label:'Status',type:'status'}]},
  documents:{title:'Dokumen',singular:'dokumen',desc:PAGE_META.documents[1],icon:'file',fields:[field('name','Nama dokumen','text',{required:true}),field('category','Kategori','select',{options:['Dasar','Minit mesyuarat','Kewangan','Borang','Laporan','Lain-lain'],default:'Lain-lain'}),field('version','Versi','text',{default:'1.0'}),field('access','Akses','select',{options:['Owner & Admin','Committee','All members'],default:'Owner & Admin'}),field('file','Muat naik fail (PDF, DOCX, XLSX, imej)','file',{required:true,wide:true}),field('note','Nota','textarea',{wide:true})],columns:[{key:'name',label:'Dokumen',sub:'fileName'},{key:'category',label:'Kategori'},{key:'version',label:'Versi'},{key:'access',label:'Akses'},{key:'createdAt',label:'Dimuat naik',type:'datetime'}]},
  income:{title:'Pendapatan',singular:'rekod pendapatan',desc:PAGE_META.income[1],icon:'arrowDown',fields:[field('date','Tarikh','date',{required:true,default:todayISO()}),field('category','Kategori','select',{options:['Yuran ahli','Sumbangan','Kutipan','Yuran aktiviti','Sewaan','Dana komuniti','Lain-lain'],default:'Yuran ahli'}),field('source','Sumber / pembayar','text',{required:true}),field('amount','Jumlah (RM)','number',{required:true,min:0.01,step:0.01}),field('method','Kaedah bayaran','select',{options:methods,default:'Tunai'}),field('reference','No. rujukan','text'),field('note','Nota','textarea',{wide:true}),field('attachment','Lampiran / bukti bayaran','file',{wide:true})],columns:[{key:'referenceNo',label:'Rujukan'},{key:'date',label:'Tarikh',type:'date'},{key:'category',label:'Kategori'},{key:'source',label:'Sumber'},{key:'amount',label:'Jumlah',type:'money'},{key:'status',label:'Kelulusan',type:'status'}]},
  expenses:{title:'Perbelanjaan',singular:'rekod perbelanjaan',desc:PAGE_META.expenses[1],icon:'arrowUp',fields:[field('date','Tarikh','date',{required:true,default:todayISO()}),field('category','Kategori','select',{options:['Operasi','Program','Fasiliti','Peralatan','Pengangkutan','Utiliti','Lain-lain'],default:'Operasi'}),field('vendor','Vendor / penerima','text',{required:true}),field('amount','Jumlah (RM)','number',{required:true,min:0.01,step:0.01}),field('method','Kaedah bayaran','select',{options:methods,default:'Bank Transfer'}),field('reference','No. rujukan','text'),field('note','Nota','textarea',{wide:true}),field('attachment','Muat naik resit','file',{wide:true})],columns:[{key:'referenceNo',label:'Rujukan'},{key:'date',label:'Tarikh',type:'date'},{key:'category',label:'Kategori'},{key:'vendor',label:'Vendor / penerima'},{key:'amount',label:'Jumlah',type:'money'},{key:'status',label:'Kelulusan',type:'status'}]},
  payments:{title:'Permohonan kewangan',singular:'rekod bayaran',desc:'Rekod permohonan, bukti, status pembayaran dan pembayaran keluar.',icon:'credit',fields:[field('date','Tarikh bayaran','date',{required:true,default:todayISO()}),field('payer','Kepada / penerima','text',{required:true}),field('billNo','No. bil / rujukan','text'),field('amount','Jumlah bayaran / bil (RM)','number',{required:true,min:0.01,step:0.01}),field('paidAmount','Jumlah dibayar (RM)','number',{min:0,step:0.01,hint:'Untuk bayaran sebahagian, masukkan amaun yang benar-benar dibayar.'}),field('accountBank','Akaun / bank','text'),field('method','Kaedah bayaran','select',{options:methods,default:'Bank Transfer'}),field('category','Kategori perbelanjaan','select',{options:['Operasi','Program','Fasiliti','Peralatan','Pengangkutan','Utiliti','Lain-lain'],default:'Operasi'}),field('status','Status pembayaran','select',{options:PAYMENT_STATUS_OPTIONS,default:'Pending Payment'}),field('refundAmount','Jumlah dipulangkan (RM)','number',{min:0,step:0.01,hint:'Isi apabila status Bayaran Dikembalikan (Refund).'}),field('reference','No. rujukan transaksi','text'),field('note','Catatan','textarea',{wide:true}),field('attachment','Bukti / lampiran','file',{wide:true})],columns:[{key:'referenceNo',label:'No. permohonan'},{key:'date',label:'Tarikh bayaran',type:'date'},{key:'payer',label:'Kepada / penerima',sub:'billNo'},{key:'category',label:'Kategori'},{key:'amount',label:'Jumlah bil',type:'money'},{key:'paidAmount',label:'Dibayar',type:'paidAmount'},{key:'status',label:'Status',type:'status'}]},
  receivedPayments:{title:'Terima bayaran',singular:'rekod terimaan',desc:'Rekod kutipan, bukti, status penerimaan dan keluarkan resit.',icon:'receipt',fields:[field('date','Tarikh bayaran / terima','date',{required:true,default:todayISO()}),field('payer','Nama pembayar','text',{required:true}),field('memberAccount','Akaun ahli berkaitan (email / username)','text'),field('billNo','No. bil / rujukan','text'),field('purpose','Tujuan bayaran','select',{options:['Yuran ahli','Sumbangan','Kutipan','Yuran aktiviti','Sewaan','Perkhidmatan','Dana komuniti','Lain-lain'],default:'Yuran ahli'}),field('amount','Jumlah bil / keseluruhan (RM)','number',{required:true,min:0.01,step:0.01}),field('receivedAmount','Jumlah diterima (RM)','number',{min:0,step:0.01,hint:'Untuk bayaran sebahagian, isi amaun yang benar-benar diterima.'}),field('method','Kaedah bayaran','select',{options:methods,default:'Tunai'}),field('accountBank','Akaun / bank','text'),field('status','Status terima bayar','select',{options:RECEIVED_STATUS_OPTIONS,default:'Pending Verification'}),field('refundAmount','Jumlah bayaran balik (RM)','number',{min:0,step:0.01,hint:'Isi apabila bayaran dipulangkan kepada pembayar.'}),field('reference','No. rujukan transaksi','text'),field('note','Catatan','textarea',{wide:true}),field('attachment','Bukti bayaran / lampiran','file',{wide:true})],columns:[{key:'referenceNo',label:'No. penerimaan'},{key:'date',label:'Tarikh',type:'date'},{key:'payer',label:'Pembayar',sub:'purpose'},{key:'receivedAmount',label:'Jumlah diterima',type:'receivedAmount'},{key:'method',label:'Kaedah'},{key:'status',label:'Status',type:'status'}]}
};
function financeSubnav(active){return `<div class="finance-subnav">${[['finance','Ikhtisar'],['income','Pendapatan'],['expenses','Perbelanjaan'],['payments','Bayar'],['receivedPayments','Terima bayaran'],['receipts','Resit rasmi'],['reports','Laporan']].filter(([p])=>canOpen(p)).map(([p,l])=>`<button class="finance-tab ${active===p?'active':''}" data-route="${p}">${l}</button>`).join('')}</div>`;}
function renderColumnValue(row,col){
  if(col.type==='status'){
    const badge=statusPill(row[col.key]);
    return row.requestedStatus&&row.approvalStatus==='Pending Approval'?`${badge}<span class="table-secondary">Diminta: ${escapeHtml(STATUS_LABELS[row.requestedStatus]||row.requestedStatus)}</span>`:badge;
  }
  if(col.type==='date')return `<span class="table-primary">${niceDate(row[col.key])}</span>`;
  if(col.type==='datetime')return `<span class="table-primary">${escapeHtml(row[col.key]?shortDateTime(row[col.key]):'—')}</span>`;
  if(col.type==='money')return `<span class="table-primary">${formatMYR(row[col.key])}</span>`;
  if(col.type==='paidAmount')return `<span class="table-primary">${formatMYR(paidAmount(row))}</span>`;
  if(col.type==='receivedAmount')return `<span class="table-primary">${formatMYR(receivedAmount(row))}</span>`;
  if(col.key==='amount')return `<span class="table-primary">${formatMYR(row[col.key])}</span>`;
  if(col.sub)return `<span class="table-primary">${escapeHtml(row[col.key]||'—')}</span><span class="table-secondary">${escapeHtml(row[col.sub]||'')}</span>`;
  return `<span class="table-primary">${escapeHtml(row[col.key]??'—')}</span>`;
}
function actionButton(module,row,action,label,iconName,options={}){
  const {disabled=false,danger=false,labeled=false,extra=''}=options;
  return `<button type="button" class="action-icon ${danger?'danger':''} ${labeled?'action-labeled':''}" title="${escapeHtml(label)}" aria-label="${escapeHtml(label)}" data-action="${action}" data-module="${module}" data-id="${escapeHtml(row.id)}" ${disabled?'disabled':''} ${extra}>${icon(iconName,'sm')}${labeled?`<span>${escapeHtml(label)}</span>`:''}</button>`;
}
function rowActions(module,row){
  const financeAction=FINANCE_TABLES.includes(module);const labelled=financeAction;const buttons=[];
  buttons.push(actionButton(module,row,'view-record','Lihat','eye',{labeled:labelled}));
  if(can(module,'edit')){
    buttons.push(actionButton(module,row,'edit-record','Edit','edit',{labeled:labelled}));
    const n=lastNoteCount(row);buttons.push(actionButton(module,row,'add-note',n?`Catatan ${n}`:'Catatan','message',{labeled:labelled}));
  }
  const approvalPending=((module==='income'||module==='expenses')&&row.status==='Pending Approval')
    ||(module==='payments'&&(row.status==='Pending Approval'||(row.requestedStatus&&row.approvalStatus==='Pending Approval')||(['Paid','Partial','Refunded'].includes(row.status)&&!financeStatusApprovedBy(row))))
    ||(module==='receivedPayments'&&(['Pending Verification','Pending Approval'].includes(row.status)||(row.requestedStatus&&row.approvalStatus==='Pending Approval')||(['Partially Received','Received','Fully Received','Refunded','Verified','Approved'].includes(row.status)&&!financeStatusApprovedBy(row))));
  if(approvalPending&&can(module,'approve'))buttons.push(actionButton(module,row,'approve-record','Semak / lulus','check',{labeled:labelled}));
  if(module==='payments'&&['Pending Payment','Unpaid','Overdue'].includes(row.status)&&can(module,'edit'))buttons.push(actionButton(module,row,'mark-payment-paid','Kemaskini status','check',{labeled:true}));
  if(financeAction){
    buttons.push(actionButton(module,row,'view-receipt','Paparkan resit','eye',{labeled:true,extra:'data-receipt-kind="receipt"'}));
    buttons.push(actionButton(module,row,'print-receipt','Cetak resit','print',{labeled:true,extra:'data-receipt-kind="receipt"'}));
    const refundAvailable=!!(row.refundReceiptNo||row.requestedRefundAmount!==undefined||row.requestedStatus==='Refunded'||row.status==='Refunded');
    if(refundAvailable){
      buttons.push(actionButton(module,row,'view-receipt','Paparkan refund','receipt',{labeled:true,extra:'data-receipt-kind="refund"'}));
      buttons.push(actionButton(module,row,'print-receipt','Cetak resit refund','print',{labeled:true,extra:'data-receipt-kind="refund"'}));
    }
    if(row.fileData)buttons.push(actionButton(module,row,'download-file','Lampiran','download',{labeled:true}));
    else buttons.push(`<button type="button" class="action-icon action-labeled" title="Tiada lampiran" aria-label="Tiada lampiran" disabled>${icon('file','sm')}<span>Lampiran</span></button>`);
    if(['payments','receivedPayments'].includes(module)&&can(module,'edit')&&canCancelFinanceRow(module,row))buttons.push(actionButton(module,row,'cancel-finance','Batal','close',{labeled:true,danger:true}));
  }else if(row.fileData&&can(module,'view'))buttons.push(actionButton(module,row,'download-file','Muat turun lampiran','download'));
  if(module==='events'&&currentUser.role==='Member'&&['Published','Registration Open'].includes(row.status))buttons.push(actionButton(module,row,'event-register','Daftar acara','calendarCheck'));
  if(module==='events'&&currentUser.role!=='Member'&&can(module,'view'))buttons.push(actionButton(module,row,'event-preview-member','Pratonton sebagai Ahli','eye',{labeled:true}));
  if(module==='events'&&can(module,'edit'))buttons.push(actionButton(module,row,'event-participants','Senarai peserta','users'));
  if(module==='announcements'&&currentUser.role==='Member'&&(row.status==='Published'||row.status==='Scheduled'&&row.publishDate<=todayISO())&&!(row.readBy||[]).includes(currentUser.id))buttons.push(actionButton(module,row,'mark-read','Tandakan telah dibaca','check'));
  if(can(module,'delete')&&canDeleteFinanceRow(module,row))buttons.push(actionButton(module,row,'delete-record','Padam','trash',{danger:true,labeled:labelled}));
  return `<div class="row-actions ${labelled?'finance-actions':''}">${buttons.join('')}</div>`;
}
async function renderTablePage(module){
  const cfg=TABLE_CONFIG[module];if(!cfg)return `<div class="panel empty-state"><strong>Modul dalam persediaan</strong></div>`;
  let rows=visibleRows(module,await db.all(module));
  const search=listSearchValue.trim().toLowerCase();if(search)rows=rows.filter(row=>Object.entries(row).filter(([key])=>!['fileData','table','id'].includes(key)).some(([,v])=>String(v??'').toLowerCase().includes(search)));
  const statuses=[...new Set(rows.map(r=>r.status).filter(Boolean))];if(window._statusFilter&&window._statusFilter!==module)window._statusFilter='';
  if(window._statusFilter===module&&window._statusValue&&window._statusValue!=='all')rows=rows.filter(r=>r.status===window._statusValue);
  rows.sort((a,b)=>String(b.updatedAt||b.date||b.createdAt||'').localeCompare(String(a.updatedAt||a.date||a.createdAt||'')));
  const totalCount=rows.length;const totalPages=Math.max(1,Math.ceil(totalCount/TABLE_PAGE_SIZE));tablePage=Math.min(Math.max(1,tablePage),totalPages);const pageRows=rows.slice((tablePage-1)*TABLE_PAGE_SIZE,tablePage*TABLE_PAGE_SIZE);
  const create=can(module,'add')?`<button class="btn btn-primary" data-action="new-record" data-module="${module}">${icon('plus')} ${['payments','receivedPayments'].includes(module)?'Rekod Bayaran':`Tambah ${escapeHtml(cfg.singular)}`}</button>`:'';
  const importButton=module==='members'&&can('members','add')?`<button class="btn btn-secondary" data-action="import-csv">${icon('upload')} Import CSV</button>`:'';
  const actions=`${can(module,'view')?`<button class="btn btn-secondary" data-action="export-current" data-module="${module}">${icon('download')} Eksport CSV</button>`:''}${importButton}${create}`;
  const head=pageHead(cfg.title,cfg.desc,actions);
  const finance=FINANCE_TABLES.includes(module)?financeSubnav(module):'';
  const searchForm=`<form class="toolbar" id="table-search-form"><label class="list-search">${icon('search')}<input name="q" value="${escapeHtml(listSearchValue)}" placeholder="Cari ${escapeHtml(cfg.singular)}..." aria-label="Cari ${escapeHtml(cfg.singular)}"></label>${statuses.length>1?`<select name="status" aria-label="Tapis ikut status" data-filter-module="${module}"><option value="all">Semua status</option>${statuses.map(s=>`<option value="${escapeHtml(s)}" ${window._statusFilter===module&&window._statusValue===s?'selected':''}>${escapeHtml(STATUS_LABELS[s]||s)}</option>`).join('')}</select>`:''}<span class="visibility-note">${totalCount} rekod</span></form>`;
  const table=totalCount?`<div class="table-scroll"><table class="data-table"><thead><tr>${cfg.columns.map(c=>`<th>${escapeHtml(c.label)}</th>`).join('')}<th style="text-align:right">Tindakan</th></tr></thead><tbody>${pageRows.map(row=>`<tr>${cfg.columns.map(col=>`<td>${renderColumnValue(row,col)}</td>`).join('')}<td>${rowActions(module,row)}</td></tr>`).join('')}</tbody></table></div>`:`<div class="empty-state"><span class="empty-illustration">${icon(cfg.icon,'xl')}</span><strong>${search?'Tiada rekod sepadan':'Belum ada '+escapeHtml(cfg.singular)}</strong><p>${search?'Cuba kata carian atau penapis lain.':'Tambah rekod pertama untuk mula membina data komuniti.'}</p>${can(module,'add')&&!search?`<button class="btn btn-primary btn-small" style="margin-top:13px" data-action="new-record" data-module="${module}">${icon('plus','sm')} Tambah ${escapeHtml(cfg.singular)}</button>`:''}</div>`;
  return `${head}${finance}${searchForm}<section class="table-card"><div class="table-topline"><span>${escapeHtml(cfg.title)} <b>· ${totalCount}</b></span><span>Disimpan pada peranti ini</span></div>${table}<div class="pagination"><span>Memaparkan ${totalCount?((tablePage-1)*TABLE_PAGE_SIZE+1):0}–${Math.min(tablePage*TABLE_PAGE_SIZE,totalCount)} daripada ${totalCount}</span><span style="display:flex;gap:7px;align-items:center"><button class="btn btn-secondary btn-small" data-action="table-page" data-page="${tablePage-1}" ${tablePage<=1?'disabled':''}>Sebelumnya</button><span>${tablePage} / ${totalPages}</span><button class="btn btn-secondary btn-small" data-action="table-page" data-page="${tablePage+1}" ${tablePage>=totalPages?'disabled':''}>Seterusnya</button></span></div></section>`;
}
function monthKeys(count=6){const now=new Date();return Array.from({length:count},(_,i)=>{const d=new Date(now.getFullYear(),now.getMonth()-count+1+i,1);return {key:`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`,label:d.toLocaleDateString('ms-MY',{month:'short'})};});}
function sumInMonth(rows,key){return rows.filter(r=>String(r.date||'').startsWith(key)).reduce((sum,r)=>{
  if(r.table==='income'||r.table==='expenses')return sum+(['Approved','Posted'].includes(r.status)?Number(r.amount||0):0);
  if(r.table==='receivedPayments')return sum+(['Verified','Received','Approved','Partially Received','Fully Received','Refunded'].includes(r.status)?netReceivedAmount(r):0);
  if(r.table==='payments')return sum+(['Paid','Verified','Disahkan','Partial','Refunded'].includes(r.status)?netPaidAmount(r):0);
  return sum;
},0);}
async function renderFinance(){
  const income=can('income','view')?visibleRows('income',await db.all('income')):[];const expense=can('expenses','view')?visibleRows('expenses',await db.all('expenses')):[];const received=can('receivedPayments','view')?visibleRows('receivedPayments',await db.all('receivedPayments')):[];const payments=can('payments','view')?visibleRows('payments',await db.all('payments')):[];
  const totalIncome=income.filter(x=>['Approved','Posted'].includes(x.status)).reduce((s,r)=>s+Number(r.amount||0),0)+received.filter(x=>['Verified','Received','Approved','Partially Received','Fully Received','Refunded'].includes(x.status)).reduce((s,r)=>s+netReceivedAmount(r),0);
  const totalExpense=expense.filter(x=>['Approved','Posted'].includes(x.status)).reduce((s,r)=>s+Number(r.amount||0),0);
  const totalPaid=payments.filter(x=>['Paid','Verified','Disahkan','Partial','Refunded'].includes(x.status)).reduce((s,r)=>s+netPaidAmount(r),0);
  const pendingPayments=payments.filter(x=>['Pending Payment','Pending','Menunggu Bayaran','Unpaid','Overdue','Partial'].includes(x.status)).reduce((s,r)=>s+Math.max(0,Number(r.amount||0)-paidAmount(r)),0);
  const pendingApproval=income.filter(x=>x.status==='Pending Approval').length+expense.filter(x=>x.status==='Pending Approval').length+received.filter(x=>['Pending Verification','Pending Approval'].includes(x.status)||(x.requestedStatus&&x.approvalStatus==='Pending Approval')).length+payments.filter(x=>x.status==='Pending Approval'||(x.requestedStatus&&x.approvalStatus==='Pending Approval')).length;
  const balance=totalIncome-totalExpense-totalPaid;
  const months=monthKeys(6);const inSeries=months.map(m=>sumInMonth([...income,...received],m.key));const outSeries=months.map(m=>sumInMonth([...expense,...payments],m.key));const max=Math.max(1,...inSeries,...outSeries);
  const chart=`<div class="chart" role="img" aria-label="Carta bulanan pendapatan dan perbelanjaan">${months.map((m,i)=>`<div class="chart-col"><div class="chart-bars"><span class="bar" title="Pendapatan ${formatMYR(inSeries[i])}" style="height:${Math.max(3,Math.round(inSeries[i]/max*100))}%"></span><span class="bar expense" title="Aliran keluar ${formatMYR(outSeries[i])}" style="height:${Math.max(3,Math.round(outSeries[i]/max*100))}%"></span></div><small>${m.label}</small></div>`).join('')}</div>`;
  const cards=[['Pendapatan & kutipan',totalIncome,'arrowDown',''],['Perbelanjaan',totalExpense,'arrowUp','orange'],['Bayaran keluar',totalPaid,'credit','blue'],['Baki semasa',balance,'wallet','balance']];
  const recentRows=[...income.map(row=>({module:'income',row})),...expense.map(row=>({module:'expenses',row})),...received.map(row=>({module:'receivedPayments',row})),...payments.map(row=>({module:'payments',row}))].sort((a,b)=>String(b.row.updatedAt||b.row.date||b.row.createdAt||'').localeCompare(String(a.row.updatedAt||a.row.date||a.row.createdAt||''))).slice(0,6);
  const moduleNames={income:'Pendapatan',expenses:'Perbelanjaan',payments:'Bayaran keluar',receivedPayments:'Terimaan'};
  const partyFor=(module,row)=>module==='income'?row.source:module==='expenses'?row.vendor:row.payer;
  const amountFor=(module,row)=>module==='income'||module==='expenses'?Number(row.amount||0):module==='payments'?(paidAmount(row)||Number(row.amount||0)):(receivedAmount(row)||Number(row.amount||0));
  const recentPanel=`<section class="panel finance-recent-panel" style="margin-top:14px"><div class="panel-head"><div><h2>Aktiviti terkini</h2><small class="hint">Paparkan pratonton atau resit rasmi bagi setiap transaksi.</small></div><button class="btn btn-secondary btn-small" data-route="receipts">${icon('receipt','sm')} Resit rasmi</button></div>${recentRows.length?`<div class="finance-recent-list">${recentRows.map(({module,row})=>`<article class="finance-recent-item"><span class="activity-dot">${icon(module==='income'?'arrowDown':module==='expenses'?'arrowUp':module==='payments'?'credit':'receipt','sm')}</span><div class="finance-recent-copy"><strong>${escapeHtml(moduleNames[module])} · ${escapeHtml(partyFor(module,row)||'—')}</strong><small>${escapeHtml(row.referenceNo||row.receiptNo||'')} · ${niceDate(row.date)} · ${STATUS_LABELS[row.status]||row.status||'—'}</small></div><strong class="finance-recent-amount">${formatMYR(amountFor(module,row))}</strong><div class="finance-recent-actions"><button class="btn btn-secondary btn-small" data-action="view-record" data-module="${module}" data-id="${escapeHtml(row.id)}">Lihat</button><button class="btn btn-primary btn-small" data-action="view-receipt" data-module="${module}" data-id="${escapeHtml(row.id)}" data-receipt-kind="receipt">Paparkan resit</button></div></article>`).join('')}</div>`:`<div class="empty-state"><strong>Belum ada aktiviti kewangan</strong><p>Rekod baharu dan status transaksi akan muncul di sini.</p></div>`}</section>`;
  return `${pageHead('Dashboard kewangan',PAGE_META.finance[1],`<button class="btn btn-secondary" data-route="receipts">${icon('receipt')} Resit rasmi</button>${can('reports','view')?`<button class="btn btn-secondary" data-route="reports">${icon('chart')} Laporan</button>`:''}`)}${financeSubnav('finance')}<div class="finance-highlight">${cards.map(([l,n,i,c])=>`<div class="finance-card ${c}"><span class="stat-icon">${icon(i)}</span><label>${l}</label><strong>${formatMYR(n)}</strong><small>${l==='Baki semasa'?'Anggaran berdasarkan rekod yang diluluskan':'Rekod diluluskan / disahkan'}</small></div>`).join('')}</div><div class="finance-grid"><section class="panel"><div class="panel-head"><h2>Aliran tunai bulanan</h2><div class="chart-legend"><span><i class="legend-dot"></i>Pendapatan</span><span><i class="legend-dot orange"></i>Aliran keluar</span></div></div>${chart}</section><section class="panel"><div class="panel-head"><h2>Perlu perhatian</h2><span class="status-pill ${pendingApproval?'orange':'green'}">${pendingApproval?`${pendingApproval} menunggu`:'Terkini'}</span></div><div class="activity-list"><div class="activity-item"><span class="activity-dot">${icon('clock','sm')}</span><span><strong>Menunggu kelulusan / pengesahan</strong><small>${pendingApproval} rekod memerlukan tindakan approver.</small></span></div><div class="activity-item"><span class="activity-dot">${icon('credit','sm')}</span><span><strong>Bayaran belum dibuat</strong><small>${formatMYR(pendingPayments)} jumlah tertunggak.</small></span></div><div class="activity-item"><span class="activity-dot">${icon('shield','sm')}</span><span><strong>Aliran kawalan kewangan</strong><small>Rekod pendapatan dan perbelanjaan bermula sebagai “Menunggu kelulusan”.</small></span></div></div><div class="quick-actions" style="margin-top:13px">${can('income','add')?`<button class="btn btn-secondary btn-small" data-action="new-record" data-module="income">${icon('plus','sm')} Catat pendapatan</button>`:''}${can('expenses','add')?`<button class="btn btn-secondary btn-small" data-action="new-record" data-module="expenses">${icon('plus','sm')} Catat perbelanjaan</button>`:''}</div></section></div>${recentPanel}<section class="panel" style="margin-top:14px"><div class="panel-head"><h2>Nota kewangan</h2><span class="visibility-note">Ringkasan dikira daripada rekod local</span></div><p class="hint">Baki semasa = pendapatan yang diluluskan + terimaan disahkan − perbelanjaan yang diluluskan − bayaran keluar yang sudah dibayar. Jumlah “Bayar” dan “Terima bayaran” tidak dianggap pendapatan/perbelanjaan sehingga status disahkan. UNIKI tidak memproses wang atau menghubungkan payment gateway dalam edisi PWA ini.</p></section>`;
}
async function renderReceipts(){
  const items=[];const typeNames={income:'Pendapatan',expenses:'Perbelanjaan',payments:'Bayaran keluar',receivedPayments:'Terimaan'};
  for(const module of FINANCE_TABLES){
    if(!can(module,'view'))continue;
    const records=visibleRows(module,await db.all(module));
    for(const row of records){
      if(row.receiptNo&&financeStatusApprovedBy(row))items.push({module,row,kind:'receipt',number:row.receiptNo,amount:module==='income'||module==='expenses'?Number(row.amount||0):module==='payments'?paidAmount(row):receivedAmount(row)});
      if(['payments','receivedPayments'].includes(module)&&row.refundReceiptNo&&row.status==='Refunded'&&financeStatusApprovedBy(row))items.push({module,row,kind:'refund',number:row.refundReceiptNo,amount:Number(row.refundAmount||0)});
    }
  }
  items.sort((a,b)=>String(b.row.date||b.row.approvedAt||'').localeCompare(String(a.row.date||a.row.approvedAt||'')));
  const addModule=can('receivedPayments','add')?'receivedPayments':can('payments','add')?'payments':'';const actions=`<button class="btn btn-secondary" data-action="print-page">${icon('print')} Cetak senarai</button>${addModule?`<button class="btn btn-primary" data-action="new-record" data-module="${addModule}">${icon('plus')} Rekod Bayaran</button>`:''}`;
  const table=items.length?`<div class="table-scroll"><table class="data-table"><thead><tr><th>Jenis</th><th>No. resit</th><th>Tarikh</th><th>Pihak transaksi</th><th>Rujukan / tujuan</th><th>Jumlah</th><th>Status</th><th>Tindakan</th></tr></thead><tbody>${items.map(item=>{const {row,module,kind,number,amount}=item;const party=module==='income'?row.source:module==='expenses'?row.vendor:row.payer;const sub=module==='income'||module==='expenses'?row.category||'—':module==='payments'?row.category||'Bayaran keluar':row.purpose||'Terimaan';const type=kind==='refund'?'Refund':typeNames[module];const kindValue=kind;return `<tr><td>${statusPill(type)}</td><td><span class="table-primary">${escapeHtml(number)}</span></td><td>${niceDate(row.date)}</td><td>${escapeHtml(party||'—')}</td><td><span class="table-primary">${escapeHtml(row.billNo||row.reference||row.referenceNo||'—')}</span><span class="table-secondary">${escapeHtml(sub)}</span></td><td>${formatMYR(amount)}</td><td>${statusPill(kind==='refund'?'Refunded':row.status)}</td><td><div class="row-actions"><button class="action-icon" type="button" data-action="view-receipt" data-module="${module}" data-id="${escapeHtml(row.id)}" data-receipt-kind="${kindValue}" title="Paparkan resit" aria-label="Paparkan resit">${icon('eye','sm')}</button><button class="action-icon" type="button" data-action="print-receipt" data-module="${module}" data-id="${escapeHtml(row.id)}" data-receipt-kind="${kindValue}" title="Cetak semula" aria-label="Cetak semula">${icon('print','sm')}</button></div></td></tr>`}).join('')}</tbody></table></div>`:`<div class="empty-state"><span class="empty-illustration">${icon('receipt','xl')}</span><strong>Belum ada resit rasmi</strong><p>Resit pendapatan, perbelanjaan, terimaan, bayaran keluar dan refund yang telah disahkan akan dikumpulkan di sini untuk dipaparkan dan dicetak semula.</p></div>`;
  return `${pageHead('Resit rasmi','Semua resit yang telah dijana—paparkan, semak dan cetak semula bila-bila masa.',actions)}${financeSubnav('receipts')}<div class="info-callout">Senarai ini memuatkan keseluruhan resit rasmi bagi Pendapatan, Perbelanjaan, Bayar, Terima bayaran dan refund. Resit dikeluarkan selepas transaksi diluluskan; rekod belum disahkan hanya menyediakan pratonton DRAF pada senarai aktiviti.</div><section class="table-card"><div class="table-topline"><span>Resit rasmi dijana · <b>${items.length}</b></span><span>Nombor resit dikekalkan untuk cetakan semula</span></div>${table}<div class="pagination"><span>${items.length} resit</span><span>UNIKI V.1 · setempat</span></div></section>`;
}
async function renderReports(){
  const financeComplete=FINANCE_TABLES.every(t=>can(t,'view'));
  if(reportFilter==='summary'&&!financeComplete)reportFilter=can('incidents','view')?'incidents':can('volunteers','view')?'volunteers':can('members','view')?'members':'summary';
  const reportOpts=[...(financeComplete?[['summary','Ringkasan kewangan']]:[]),['members','Ahli'],['events','Acara & aktiviti'],['incidents','Kejadian terbuka'],['complaints','Aduan aktif'],['volunteers','Penyertaan sukarelawan'],['income','Pendapatan'],['expenses','Perbelanjaan'],['payments','Bayar'],['receivedPayments','Terima bayaran']];
  const table=reportOpts.some(([v])=>v===reportFilter)&&reportFilter!=='summary'?reportFilter:null;
  let rows=table&&can(table,'view')?visibleRows(table,await db.all(table)):[];
  if(table==='incidents')rows=rows.filter(r=>!['Resolved','Closed','Selesai','Ditutup'].includes(r.status));if(table==='complaints')rows=rows.filter(r=>!['Resolved','Closed','Selesai','Ditutup'].includes(r.status));if(table==='payments')rows=rows.filter(r=>['Pending Payment','Pending','Paid','Partial','Unpaid','Overdue','Cancelled','Refunded','Pending Approval'].includes(r.status));if(table==='events')rows=rows.filter(r=>!['Draft','Cancelled'].includes(r.status));
  if(reportFrom)rows=rows.filter(r=>(r.date||r.reportedAt||r.submitted||r.joined||'')>=reportFrom);
  if(reportTo)rows=rows.filter(r=>(r.date||r.reportedAt||r.submitted||r.joined||'')<=reportTo);
  const inRange=r=>(!reportFrom||(r.date||'')>=reportFrom)&&(!reportTo||(r.date||'')<=reportTo);
  const income=(can('income','view')?await db.all('income'):[]).filter(r=>['Approved','Posted'].includes(r.status)&&inRange(r));
  const expenses=(can('expenses','view')?await db.all('expenses'):[]).filter(r=>['Approved','Posted'].includes(r.status)&&inRange(r));
  const received=(can('receivedPayments','view')?await db.all('receivedPayments'):[]).filter(r=>['Verified','Received','Approved','Partially Received','Fully Received','Refunded'].includes(r.status)&&inRange(r));
  const payments=(can('payments','view')?await db.all('payments'):[]).filter(inRange);
  const totalIn=income.reduce((s,r)=>s+Number(r.amount||0),0)+received.reduce((s,r)=>s+netReceivedAmount(r),0);const totalOut=expenses.reduce((s,r)=>s+Number(r.amount||0),0)+payments.filter(r=>['Paid','Verified','Disahkan','Partial','Refunded'].includes(r.status)).reduce((s,r)=>s+netPaidAmount(r),0);
  const pendingApprovalCount=(can('income','view')?(await db.all('income')).filter(r=>r.status==='Pending Approval'&&inRange(r)).length:0)+(can('expenses','view')?(await db.all('expenses')).filter(r=>r.status==='Pending Approval'&&inRange(r)).length:0)+(can('receivedPayments','view')?(await db.all('receivedPayments')).filter(r=>(['Pending Verification','Pending Approval'].includes(r.status)||(r.requestedStatus&&r.approvalStatus==='Pending Approval'))&&inRange(r)).length:0)+(can('payments','view')?(await db.all('payments')).filter(r=>(r.status==='Pending Approval'||(r.requestedStatus&&r.approvalStatus==='Pending Approval'))&&inRange(r)).length:0);
  const reportTable=table?renderReportRows(table,rows):`<div class="finance-highlight"><div class="finance-card"><label>Pendapatan & kutipan</label><strong>${formatMYR(totalIn)}</strong><small>Disahkan / diluluskan</small></div><div class="finance-card"><label>Aliran keluar</label><strong>${formatMYR(totalOut)}</strong><small>Bayaran dan perbelanjaan sah</small></div><div class="finance-card balance"><label>Baki semasa</label><strong>${formatMYR(totalIn-totalOut)}</strong><small>Setakat data pada peranti ini</small></div><div class="finance-card"><label>Menunggu kelulusan</label><strong>${pendingApprovalCount}</strong><small>Rekod memerlukan tindakan approver</small></div></div><div class="info-callout">Pilih jenis laporan untuk pratonton rekod. Gunakan Eksport CSV atau Cetak untuk simpan salinan.</div>`;
  const action=`<button class="btn btn-secondary" data-action="print-page">${icon('print')} Cetak / PDF</button>${table?`<button class="btn btn-secondary" data-action="export-report">${icon('download')} Eksport CSV</button>`:''}`;
  return `${pageHead('Pusat laporan',PAGE_META.reports[1],action)}<div class="panel" style="margin-bottom:13px"><div class="form-grid"><div class="form-field"><label for="report-type">Jenis laporan</label><select id="report-type" class="field-control">${reportOpts.filter(([v])=>v==='summary'?financeComplete:can(v,'view')).map(([v,l])=>`<option value="${v}" ${reportFilter===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="form-field"><label for="report-from">Dari tarikh</label><input class="field-control" id="report-from" type="date" value="${escapeHtml(reportFrom)}"></div><div class="form-field"><label for="report-to">Hingga tarikh</label><input class="field-control" id="report-to" type="date" value="${escapeHtml(reportTo)}"></div><div class="form-field" style="align-self:end"><button class="btn btn-primary" data-action="apply-report">${icon('filter')} Jana laporan</button></div></div></div>${table?`<section class="table-card"><div class="table-topline"><span>${escapeHtml(MODULE_LABELS[table]||table)} · <b>${rows.length} rekod</b></span><span>Filter tarikh: ${reportFrom?niceDate(reportFrom):'—'} hingga ${reportTo?niceDate(reportTo):'—'}</span></div>${reportTable}<div class="pagination"><span>${rows.length} rekod dipaparkan</span><span>Preview setempat</span></div></section>`:`<section class="panel"><div class="panel-head"><h2>Ringkasan kewangan</h2><span class="visibility-note">Nilai dalam RM</span></div>${reportTable}</section>`}`;
}
function renderReportRows(table,rows){const cfg=TABLE_CONFIG[table];if(!cfg)return '';return rows.length?`<div class="table-scroll"><table class="data-table"><thead><tr>${cfg.columns.map(c=>`<th>${escapeHtml(c.label)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${cfg.columns.map(c=>`<td>${renderColumnValue(r,c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:`<div class="empty-state"><strong>Tiada rekod dalam penapis</strong><p>Ubah julat tarikh atau tambah rekod baharu.</p></div>`;}
async function renderUsers(){
  const rows=await db.all('users');const actions=isOwner()||currentUser.role==='Administrator'?`<button class="btn btn-primary" data-action="new-user">${icon('plus')} Tambah pengguna</button>`:'';
  return `${pageHead('Pengguna & akses',PAGE_META.users[1],actions)}<div class="info-callout">Akaun ini hanya berfungsi pada profil pelayar/peranti ini. Tiada pelayan akaun jauh dalam edisi PWA local-first.</div><section class="table-card"><div class="table-topline"><span>Pengguna berdaftar · <b>${rows.length}</b></span><span>Hash kata laluan PBKDF2 · local</span></div>${rows.length?`<div class="table-scroll"><table class="data-table"><thead><tr><th>Pengguna</th><th>Email / username</th><th>Telefon</th><th>Peranan</th><th>Dicipta</th><th></th></tr></thead><tbody>${rows.map(r=>`<tr><td><span class="table-primary">${escapeHtml(r.name)}</span><span class="table-secondary">${r.id===currentUser.id?'Anda':'Akaun local'}</span></td><td><span class="table-primary">${escapeHtml(r.email)}</span><span class="table-secondary">@${escapeHtml(r.username)}</span></td><td>${escapeHtml(r.phone||'—')}</td><td>${statusPill(r.role)}</td><td>${niceDate((r.createdAt||'').slice(0,10))}</td><td><div class="row-actions">${(isOwner()||currentUser.role==='Administrator')&&r.id!==currentUser.id&&(isOwner()||r.role!=='Owner')?`<button class="action-icon" data-action="edit-user" data-id="${r.id}" title="Edit pengguna" aria-label="Edit pengguna">${icon('edit','sm')}</button><button class="action-icon danger" data-action="delete-user" data-id="${r.id}" title="Padam pengguna" aria-label="Padam pengguna">${icon('trash','sm')}</button>`:''}</div></td></tr>`).join('')}</tbody></table></div>`:`<div class="empty-state"><strong>Tiada pengguna</strong></div>`}<div class="pagination"><span>${rows.length} pengguna</span><span>Privasi: akses ikut peranan</span></div></section>`;
}
async function renderRoles(){
  const list=roles;return `${pageHead('Peranan & kebenaran','Tetapkan View, Add, Edit, Delete dan Approve bagi setiap modul.',isOwner()?`<button class="btn btn-primary" data-action="new-role">${icon('plus')} Cipta peranan</button>`:'')}<div class="info-callout">Owner mempunyai akses penuh dan tidak boleh diubah. Kebenaran disemak sekali lagi dalam service layer sebelum perubahan data.</div><section class="table-card"><div class="table-scroll"><table class="data-table"><thead><tr><th>Peranan</th><th>Penerangan</th><th>Modul dengan akses</th><th>Jenis</th><th></th></tr></thead><tbody>${list.map(r=>{const n=Object.entries(r.permissions||{}).filter(([,a])=>a?.length).length;return `<tr><td><span class="table-primary">${escapeHtml(r.name)}</span></td><td>${escapeHtml(r.description||'—')}</td><td>${n} modul</td><td>${r.system?statusPill('System'):statusPill('Custom')}</td><td><div class="row-actions">${isOwner()?`<button class="action-icon" data-action="edit-role" data-id="${r.id}" aria-label="Edit role ${escapeHtml(r.name)}" title="Edit kebenaran">${icon('edit','sm')}</button>${!r.system?`<button class="action-icon danger" data-action="delete-role" data-id="${r.id}" aria-label="Padam role ${escapeHtml(r.name)}" title="Padam peranan">${icon('trash','sm')}</button>`:''}`:''}</div></td></tr>`}).join('')}</tbody></table></div><div class="pagination"><span>${list.length} peranan</span><span>Owner protected</span></div></section>`;
}
async function renderAudit(){
  const rows=(await db.all('audit')).sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));const q=listSearchValue.trim().toLowerCase();const filtered=q?rows.filter(r=>JSON.stringify(r).toLowerCase().includes(q)):rows;
  return `${pageHead('Jejak audit',PAGE_META.audit[1],`<button class="btn btn-secondary" data-action="export-current" data-module="audit">${icon('download')} Eksport CSV</button>`)}<div class="info-callout">Setiap perubahan merekod pengguna, peranan, masa, rekod dan ringkasan medan yang berubah. Kata laluan tidak pernah dimasukkan dalam log. Log ini disimpan pada peranti ini.</div><form class="toolbar" id="table-search-form"><label class="list-search">${icon('search')}<input name="q" value="${escapeHtml(listSearchValue)}" placeholder="Cari pengguna, tindakan, modul atau perubahan..."></label><span class="visibility-note">${filtered.length} aktiviti</span></form><section class="table-card"><div class="table-scroll"><table class="data-table"><thead><tr><th>Masa</th><th>Pengguna</th><th>Tindakan</th><th>Modul</th><th>Rekod & perubahan</th><th>Peranti</th></tr></thead><tbody>${filtered.length?filtered.map(r=>`<tr><td>${escapeHtml(shortDateTime(r.createdAt))}</td><td><span class="table-primary">${escapeHtml(r.userName||'System')}</span><span class="table-secondary">${escapeHtml(r.userRole||'System')}</span></td><td>${escapeHtml(r.action||'—')}</td><td>${escapeHtml(r.moduleName||'System')}</td><td><span class="table-primary">${escapeHtml(r.recordLabel||r.recordId||'—')}</span>${r.details?`<span class="table-secondary audit-detail" title="${escapeHtml(r.details)}">${escapeHtml(r.details)}</span>`:''}</td><td>${escapeHtml(r.device||'Browser')}</td></tr>`).join(''):`<tr><td colspan="6" class="empty-table">Belum ada aktiviti direkodkan.</td></tr>`}</tbody></table></div><div class="pagination"><span>Audit tersimpan secara local</span><span>${filtered.length} aktiviti</span></div></section>`;
}
async function renderAI(){
  const localEnabled=await getSetting('localAI',true);
  return `${pageHead('UNIKI AI Helper',PAGE_META.ai[1],`<span class="ai-mode-badge">${icon('lock','sm')} ${localEnabled?'LOCAL AI ON':'AI OFF'} · DATA TIDAK DIHANTAR</span>`)}<div class="ai-layout"><section class="panel ai-chat"><div class="panel-head"><h2>Ask UNIKI AI</h2><button class="text-button" data-action="toggle-ai-local">${icon('spark','sm')} Local helper ${localEnabled?'ON':'OFF'}</button></div><div class="info-callout">Pembantu ini menggunakan ringkasan dan peraturan local sahaja. Ia mematuhi kebenaran peranan anda; tiada panggilan AI Cloud dibuat dalam build ini.</div><div class="ai-messages" id="ai-messages"><div class="chat-bubble bot">Hai ${escapeHtml(currentUser.name.split(' ')[0])}! Saya boleh membantu menjawab ringkasan daripada data yang anda dibenarkan lihat. Cuba soalan di sebelah, seperti “berapa jumlah ahli aktif?” atau “apakah baki semasa?”</div></div><form class="chat-input" id="ai-form"><input name="question" required placeholder="Taip soalan anda..." aria-label="Soalan untuk UNIKI AI"><button class="btn btn-primary" type="submit" aria-label="Hantar soalan">${icon('arrowRight')}</button></form></section><aside class="panel"><div class="panel-head"><h2>Soalan pantas</h2><span class="visibility-note">Local insights</span></div>${[['Ringkasan komuniti','Ringkasan komuniti'],['Ringkasan kewangan bulan ini','Ringkasan kewangan bulan ini'],['Aktiviti bulan ini','Aktiviti bulan ini'],['Laporan kejadian belum selesai','Senaraikan laporan kejadian yang belum selesai'],['Aduan belum selesai','Senaraikan aduan yang belum selesai'],['Pembayaran belum disahkan','Senaraikan pembayaran yang belum disahkan'],['Baki semasa','Apakah baki semasa?']].map(([l,q])=>`<button class="quick-prompt" data-action="ask-ai" data-question="${escapeHtml(q)}">${l} ${icon('arrowRight','sm')}</button>`).join('')}<p class="hint" style="margin-top:14px">Untuk AI Cloud, sambungkan endpoint yang diluluskan dan tetapkan polisi privasi/permission. Cloud AI tidak dikonfigurasi atau dihidupkan dalam versi ini.</p></aside></div>`;
}
async function renderSync(){
  const all=await db.all();const snapshots=await db.listSnapshots();const last=await getSetting('lastSync',null);const lastSnapshot=snapshots[0];
  return `${pageHead('Backup & Sync',PAGE_META.sync[1],`<button class="btn btn-primary" data-action="create-backup">${icon('lock')} Backup tersulit</button>`)}<div class="sync-status">${icon('shield')}<span><strong>Data local-first aktif</strong><br>Rekod disimpan dalam IndexedDB peranti ini. Last local sync: ${last?escapeHtml(shortDateTime(last)):'Belum pernah'}. ${all.length} rekod sedia di peranti.</span></div><div class="sync-grid"><article class="sync-option"><span class="stat-icon">${icon('downloadCloud')}</span><strong>Backup local</strong><p>Bina fail .uniki tersulit dengan kata laluan. Sesuai untuk simpanan luar peranti.</p><button class="btn btn-secondary btn-small" data-action="create-backup">${icon('lock','sm')} Buat backup</button></article><article class="sync-option"><span class="stat-icon blue">${icon('upload')}</span><strong>Restore backup</strong><p>Pulihkan workspace daripada fail .uniki. Data semasa akan diganti selepas pengesahan.</p><button class="btn btn-secondary btn-small" data-action="restore-backup">${icon('fileUp','sm')} Pilih fail</button></article><article class="sync-option"><span class="stat-icon orange">${icon('wifi')}</span><strong>Local Wi-Fi Sync</strong><p>Direct peer sync, QR scanner dan IP receiver memerlukan companion service untuk desktop/Android.</p><button class="btn btn-secondary btn-small" data-action="sync-check">${icon('refresh','sm')} Semak kesediaan</button></article></div><section class="panel" style="margin-top:14px"><div class="panel-head"><h2>Pemindahan antara peranti</h2><span class="status-pill orange">Companion service belum dipasang</span></div><div class="settings-row"><span><strong>QR Connect</strong><small>QR berpasangan memerlukan service penerima setempat dan pertukaran kunci sementara.</small></span><button class="btn btn-secondary btn-small" data-action="qr-info">${icon('globe','sm')} Keperluan</button></div><div class="settings-row"><span><strong>Connect by IP</strong><small>IP/port tidak akan menghubungkan peranti tanpa listener sync yang disahkan pada peranti penerima.</small></span><button class="btn btn-secondary btn-small" data-action="ip-connect">${icon('wifi','sm')} Semak IP</button></div><div class="settings-row"><span><strong>Manual Sync</strong><small>Gunakan fail backup .uniki yang disulitkan untuk pindah; elakkan import data sama lebih daripada sekali.</small></span><button class="btn btn-secondary btn-small" data-action="create-backup">${icon('download','sm')} Backup & pindah</button></div></section><section class="panel" style="margin-top:14px"><div class="panel-head"><h2>Sandaran pemulihan dalam aplikasi</h2><span class="visibility-note">${snapshots.length} snapshot</span></div><p class="hint">Snapshot setempat membantu pulih daripada perubahan tidak sengaja pada profil pelayar yang sama. Ia bukan sandaran terhadap kehilangan/peranti rosak.</p>${lastSnapshot?`<div class="settings-row"><span><strong>Terakhir: ${escapeHtml(shortDateTime(lastSnapshot.createdAt))}</strong><small>${lastSnapshot.count} rekod · tersimpan pada peranti ini</small></span><button class="btn btn-secondary btn-small" data-action="restore-snapshot" data-id="${lastSnapshot.id}">${icon('history','sm')} Pulihkan</button></div>`:`<div class="settings-row"><span><strong>Belum ada snapshot</strong><small>Cipta snapshot tempatan sebagai checkpoint.</small></span><button class="btn btn-secondary btn-small" data-action="snapshot-now">Cipta snapshot</button></div>`}</section><section class="panel" style="margin-top:14px"><div class="panel-head"><h2>Sync status</h2><span class="status-pill gray">Belum dipasangkan</span></div><div class="visibility-note">Records to upload: ${all.filter(r=>!['users','roles','settings'].includes(r.table)).length} · Records to download: — · Conflicts: —<br>Direct Wi-Fi / QR sync belum aktif tanpa peer service; aplikasi tidak akan overwrite data secara senyap.</div></section>`;
}
async function renderSettings(){
  const theme=await getSetting('theme','light');const highContrast=await getSetting('highContrast',false);const auto=await getSetting('autoSnapshot',false);const logoutSetting=Number(await getSetting('autoLogoutMinutes',30));const localAI=await getSetting('localAI',true);const cloudAI=await getSetting('cloudAI',false);
  const tabs=[['general','Umum'],['security','Keselamatan'],['privacy','Privasi & AI'],['backup','Backup']];
  let panel='';
  if(settingsTab==='general')panel=`<h2>Maklumat komuniti</h2><p>Kemaskini identiti dan cara ruang komuniti dipaparkan.</p><div class="settings-row"><span><strong>Nama komuniti</strong><small>${escapeHtml(community.name||'—')}</small></span><button class="btn btn-secondary btn-small" data-action="edit-community">${icon('edit','sm')} Edit</button></div><div class="settings-row"><span><strong>Butiran hubungan</strong><small>${escapeHtml(community.email||'Email belum ditetapkan')} · ${escapeHtml(community.phone||'Telefon belum ditetapkan')}<br>${escapeHtml(community.address||'Alamat belum ditetapkan')}</small></span><button class="btn btn-secondary btn-small" data-action="edit-community">Edit</button></div><div class="settings-row"><span><strong>Logo komuniti pada resit</strong><small>${community.logoData?'Logo khusus komuniti disimpan pada peranti ini.':'Logo UNIKI digunakan sehingga logo komuniti dimuat naik.'}</small></span><div class="community-logo-settings-actions"><img class="community-logo-inline" src="${escapeHtml(communityLogoSrc())}" alt="Pratonton logo resit"><button class="btn btn-secondary btn-small" data-action="edit-community">${icon('upload','sm')} Urus logo</button></div></div><div class="settings-row"><span><strong>Tema aplikasi</strong><small>Pilihan disimpan pada peranti ini.</small></span><div class="quick-actions"><button class="btn ${theme==='light'?'btn-primary':'btn-secondary'} btn-small" data-action="set-theme" data-theme="light">${icon('sun','sm')} Light</button><button class="btn ${theme==='dark'?'btn-primary':'btn-secondary'} btn-small" data-action="set-theme" data-theme="dark">${icon('moon','sm')} Dark</button></div></div><div class="settings-row"><span><strong>Kontras tinggi</strong><small>Tingkatkan pemisahan sempadan dan kontras antara surface untuk kebolehbacaan.</small></span><label class="switch"><input type="checkbox" data-setting="highContrast" ${highContrast?'checked':''}><span class="slider"></span></label></div><div class="settings-row"><span><strong>Bahasa</strong><small>Versi 1 menggunakan Bahasa Melayu. Sokongan English boleh ditambah pada pakej bahasa seterusnya.</small></span><span class="status-pill gray">Bahasa Melayu</span></div><div class="settings-row"><span><strong>Pasang UNIKI sebagai PWA</strong><small>Tambah aplikasi ke desktop atau skrin utama daripada browser yang menyokong pemasangan.</small></span><button class="btn btn-secondary btn-small" data-action="install-pwa">${icon('downloadCloud','sm')} Pasang app</button></div>`;
  if(settingsTab==='security')panel=`<h2>Keselamatan akaun</h2><p>Kawal akses setempat dan tindakan sensitif.</p><div class="settings-row"><span><strong>Ubah password</strong><small>Password diproses dengan PBKDF2 melalui Web Crypto dan tidak disimpan dalam bentuk teks biasa.</small></span><button class="btn btn-secondary btn-small" data-action="change-password">Ubah password</button></div><div class="settings-row"><span><strong>Log keluar automatik</strong><small>Tamatkan sesi selepas tiada aktiviti pada peranti ini. Kunci peranti dan akaun OS juga penting.</small></span><select class="field-control" style="width:auto;min-width:145px" data-setting="autoLogoutMinutes" aria-label="Tempoh log keluar automatik"><option value="15" ${logoutSetting===15?'selected':''}>15 minit</option><option value="30" ${logoutSetting===30?'selected':''}>30 minit</option><option value="60" ${logoutSetting===60?'selected':''}>60 minit</option><option value="120" ${logoutSetting===120?'selected':''}>120 minit</option><option value="0" ${logoutSetting===0?'selected':''}>Tidak aktif</option></select></div><div class="settings-row"><span><strong>Jejak audit</strong><small>Log masuk, perubahan rekod, kelulusan dan tetapan direkod setempat.</small></span><button class="btn btn-secondary btn-small" data-route="audit">Lihat log</button></div>${isOwner()?`<div class="settings-row"><span><strong>Reset aplikasi</strong><small>Padam keseluruhan workspace daripada profil pelayar ini. Tindakan tidak boleh dibuat asal.</small></span><button class="btn btn-danger btn-small" data-action="factory-reset">Reset aplikasi</button></div>`:''}`;
  if(settingsTab==='privacy')panel=`<h2>Privasi & AI</h2><p>Kawalan data aplikasi dan tingkah laku pembantu pintar.</p><div class="settings-row"><span><strong>AI local helper</strong><small>Ringkasan berasaskan peraturan berjalan pada peranti dan mengikut permission anda.</small></span><label class="switch"><input type="checkbox" data-setting="localAI" ${localAI?'checked':''}><span class="slider"></span></label></div><div class="settings-row"><span><strong>AI Cloud</strong><small>Belum tersedia: tiada API endpoint atau provider cloud dikonfigurasi. Data tidak dihantar keluar.</small></span><label class="switch"><input type="checkbox" data-setting="cloudAI" ${cloudAI?'checked':''} disabled title="Cloud AI belum dikonfigurasi"><span class="slider"></span></label></div><div class="settings-row"><span><strong>Direktori ahli</strong><small>Paparan senarai ahli dikawal oleh permission Members · View. Tiada direktori awam dalam profil Member lalai.</small></span><span class="status-pill green">Role-controlled</span></div><div class="info-callout" style="margin-top:14px">Data PWA ini berada dalam storan pelayar dan tidak disulitkan pada tahap database. Untuk data sangat sensitif, lindungi peranti/akaun OS dan simpan backup menggunakan kata laluan kuat.</div>`;
  if(settingsTab==='backup')panel=`<h2>Backup & pemulihan</h2><p>Cipta fail backup tersulit dan snapshot setempat.</p><div class="settings-row"><span><strong>Backup manual tersulit</strong><small>Fail .uniki disulitkan menggunakan AES-GCM dan kunci daripada kata laluan backup.</small></span><button class="btn btn-primary btn-small" data-action="create-backup">${icon('lock','sm')} Buat backup</button></div><div class="settings-row"><span><strong>Pulihkan daripada fail</strong><small>Import menggantikan semua rekod semasa. Pastikan salinan data lama telah dibuat.</small></span><button class="btn btn-secondary btn-small" data-action="restore-backup">${icon('fileUp','sm')} Restore</button></div><div class="settings-row"><span><strong>Snapshot automatik</strong><small>Simpan checkpoint local sebelum perubahan pertama hari tersebut. Masih berada dalam storan pelayar yang sama.</small></span><label class="switch"><input type="checkbox" data-setting="autoSnapshot" ${auto?'checked':''}><span class="slider"></span></label></div><div class="settings-row"><span><strong>Versi aplikasi</strong><small>UNIKI V.1 · ${APP_VERSION} · PWA browser edition</small></span><span class="status-pill blue">Local-first</span></div>`;
  return `${pageHead('Tetapan',PAGE_META.settings[1])}<div class="settings-layout"><nav class="settings-nav">${tabs.map(([k,l])=>`<button class="${settingsTab===k?'active':''}" data-action="settings-tab" data-tab="${k}">${l}</button>`).join('')}</nav><section class="settings-panel">${panel}</section></div>`;
}

function updateNetworkLabel(){const pill=$('#network-pill');if(!pill)return;const online=navigator.onLine;const dot=pill.querySelector('.network-dot');if(dot){dot.style.background=online?'':'#e6a33e';dot.style.boxShadow=online?'':'none';}const label=pill.querySelector('span:last-child');if(label)label.textContent=online?'ONLINE':'OFFLINE';}

function openDialog(title,subtitle,body,footer=''){
  $('#uniki-dialog')?.remove();
  const html=`<dialog id="uniki-dialog"><div class="dialog-head"><div><h2>${escapeHtml(title)}</h2>${subtitle?`<p>${escapeHtml(subtitle)}</p>`:''}</div><button class="btn-icon" type="button" aria-label="Tutup" data-action="close-dialog">${icon('close')}</button></div><div class="dialog-body">${body}</div>${footer?`<div class="dialog-foot">${footer}</div>`:''}</dialog>`;
  document.body.insertAdjacentHTML('beforeend',html);const dlg=$('#uniki-dialog');dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});dlg.showModal();return dlg;
}
function closeDialog(){const d=$('#uniki-dialog');if(d){d.close();d.remove();}}
function renderFormField(f,value,editing=false,record={}){
  const id='field-'+f.key;let val=value;
  if(val===undefined||val===null||val===''){val=typeof f.default==='function'?f.default():(f.default??'');}
  const required=f.required&&!(f.type==='file'&&editing&&record.fileData);
  const attrs=`id="${id}" name="${escapeHtml(f.key)}" ${required?'required':''} ${f.min!==undefined?`min="${f.min}"`:''} ${f.step?`step="${f.step}"`:''} ${f.maxlength?`maxlength="${f.maxlength}"`:''} ${f.placeholder?`placeholder="${escapeHtml(f.placeholder)}"`:''}`;
  let control='';
  if(f.type==='textarea')control=`<textarea ${attrs} ${f.maxlength?`maxlength="${f.maxlength}"`:''}>${escapeHtml(val)}</textarea>`;
  else if(f.type==='select')control=`<select ${attrs}>${(f.options||[]).map(o=>{const opt=typeof o==='string'?o:o.value;const label=typeof o==='string'?(STATUS_LABELS[o]||o):o.label;return `<option value="${escapeHtml(opt)}" ${String(opt)===String(val)?'selected':''}>${escapeHtml(label)}</option>`}).join('')}</select>`;
  else if(f.type==='file')control=`${editing&&record.fileName?`<div class="hint">Fail sedia ada: <strong>${escapeHtml(record.fileName)}</strong></div>`:''}<input type="file" ${attrs} accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp">`;
  else control=`<input type="${['email','date','number','tel'].includes(f.type)?f.type:'text'}" ${attrs} value="${escapeHtml(val)}" ${f.type==='number'?'inputmode="decimal"':''}>`;
  return `<div class="form-field ${f.wide?'span-2':''}"><label for="${id}">${escapeHtml(f.label)}${f.required?' *':''}</label>${control}${f.hint?`<small class="hint">${escapeHtml(f.hint)}</small>`:''}</div>`;
}
function makeFormFields(cfg,record={}){return `<div class="form-grid">${cfg.fields.map(f=>renderFormField(f,record[f.key],!!record.id,record)).join('')}</div>`;}
async function readDataURL(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(new Error('Fail tidak dapat dibaca.'));r.readAsDataURL(file);});}
async function readCommunityLogo(file){
  const allowed=['image/png','image/jpeg','image/webp'];
  if(!allowed.includes(String(file?.type||'').toLowerCase()))throw new Error('Pilih imej PNG, JPG atau WebP. SVG dan fail lain tidak disokong.');
  if(file.size>3*1024*1024)throw new Error('Saiz maksimum logo ialah 3 MB.');
  const data=await readDataURL(file);const probe=new Image();
  await new Promise((resolve,reject)=>{probe.onload=resolve;probe.onerror=()=>reject(new Error('Imej logo tidak dapat dibaca.'));probe.src=data;});
  if(!probe.naturalWidth||!probe.naturalHeight||probe.naturalWidth>4096||probe.naturalHeight>4096)throw new Error('Dimensi logo tidak sah atau terlalu besar (maksimum 4096 × 4096 px).');
  return data;
}
async function openRecordForm(module,id=null){
  guard(module,id?'edit':'add');const cfg=TABLE_CONFIG[module];if(!cfg)throw new Error('Borang untuk modul ini belum tersedia.');const rawRecord=id?await db.get(module,id):{};if(id&&!rawRecord)throw new Error('Rekod tidak ditemui.');
  const record={...rawRecord};
  if(record.requestedStatus&&record.approvalStatus==='Pending Approval')record.status=record.requestedStatus;
  if(module==='payments'){if(['Verified','Disahkan'].includes(record.status))record.status='Paid';if(record.paidAmount===undefined)record.paidAmount=paidAmount(record)||'';if(record.requestedStatus==='Refunded'&&record.requestedRefundAmount!==undefined)record.refundAmount=record.requestedRefundAmount;}
  if(module==='receivedPayments'){if(['Verified','Approved'].includes(record.status))record.status='Fully Received';if(record.receivedAmount===undefined)record.receivedAmount=receivedAmount(record)||'';if(record.requestedStatus==='Refunded'&&record.requestedRefundAmount!==undefined)record.refundAmount=record.requestedRefundAmount;}
  const financeModule=FINANCE_TABLES.includes(module);const needsReauth=Boolean(id)||financeModule;
  const workflow=['payments','receivedPayments'].includes(module)?`<div class="info-callout finance-workflow"><strong>Aliran kerja</strong><span>Bayaran <b>→</b> Maklumat <b>→</b> Bukti <b>→</b> Semak <b>→</b> Simpan <b>→</b> Status <b>→</b> Kemaskini Kewangan</span><small>Paparkan resit dan cetakan pratonton tersedia selepas Simpan; pratonton ditanda DRAF sehingga pengguna dengan permission Approve mengesahkan transaksi dan nombor resit rasmi dikeluarkan.</small></div>`:'';
  const authField=needsReauth?`<div class="form-grid reauth-grid"><div class="form-field span-2"><label for="record-reauth-password">Sahkan password akaun anda *</label><input id="record-reauth-password" name="reauthPassword" type="password" required autocomplete="current-password"><small class="hint">Perubahan disimpan menggunakan identiti pengguna yang sedang log masuk. Tindakan direkod dalam Jejak audit.</small></div></div>`:'';
  const dlg=openDialog(`${id?'Edit':'Tambah'} ${cfg.singular}`,needsReauth?'Sahkan perubahan menggunakan password akaun pengguna yang sedang log masuk.':'Medan bertanda * wajib diisi.',`<form id="record-form"><input type="hidden" name="id" value="${escapeHtml(id||'')}">${workflow}${makeFormFields(cfg,record)}${authField}</form>`,`<button type="button" class="btn btn-secondary" data-action="close-dialog">Tutup</button><button type="submit" form="record-form" class="btn btn-primary">${icon('check')} ${id?'Simpan perubahan':'Simpan rekod'}</button>`);
  $('#record-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget;const fd=new FormData(form);const data={};for(const f of cfg.fields){if(f.type==='file'){const file=fd.get(f.key);if(file&&file.size){if(file.size>10*1024*1024){toast('Fail terlalu besar','Saiz maksimum 10 MB.','error');return;}else{data.fileData=await readDataURL(file);data.fileName=file.name;data.mimeType=file.type||'application/octet-stream';}}}else data[f.key]=String(fd.get(f.key)||'').trim();}
    if(id)data.id=id;
    try{if(needsReauth)await verifyCurrentUserPassword(String(fd.get('reauthPassword')||''));const saved=await serviceSave(module,data,{passwordVerified:needsReauth});closeDialog();listSearchValue='';await renderApp();if(financeModule&&can(module,'view'))await viewRecord(module,saved.id);toast('Rekod disimpan',financeModule?(saved.receiptNo&&financeStatusApprovedBy(saved)?'Resit rasmi tersedia. Pilih Paparkan resit atau Cetak resit.':saved.requestedStatus||['Pending Approval','Pending Verification'].includes(saved.status)?'Rekod menunggu semakan / kelulusan. Pratonton bertanda DRAF sehingga disahkan.':'Pratonton resit tersedia.'):`${cfg.singular} berjaya disimpan.`);}catch(err){toast('Tidak dapat menyimpan',err.message||'Data belum disimpan. Sila cuba lagi.','error');}
  });
}
function throwToast(t,m,k){toast(t,m,k);}
async function hashPassword(password,saltBytes=null){
  if(!crypto.subtle)throw new Error('Web Crypto tidak tersedia. Buka aplikasi melalui HTTPS atau pelayar moden.');
  const salt=saltBytes||crypto.getRandomValues(new Uint8Array(16));const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt,iterations:150000,hash:'SHA-256'},material,256);return {salt:bytesToBase64(salt),hash:bytesToBase64(new Uint8Array(bits))};
}
async function verifyHash(password,saltB64,expected){try{const result=await hashPassword(password,base64ToBytes(saltB64));return constantTimeEqual(result.hash,expected);}catch{return false;}}
function bytesToBase64(bytes){let s='';bytes.forEach(b=>s+=String.fromCharCode(b));return btoa(s);}
function base64ToBytes(str){const binary=atob(str);return Uint8Array.from(binary,c=>c.charCodeAt(0));}
function constantTimeEqual(a,b){if(typeof a!=='string'||typeof b!=='string'||a.length!==b.length)return false;let n=0;for(let i=0;i<a.length;i++)n|=a.charCodeAt(i)^b.charCodeAt(i);return n===0;}
function validPhone(value){return !value||/^[+0-9()\-\s]{7,22}$/.test(value);}
function validEmail(value){return !value||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);}
async function writeAudit(action,moduleName,recordId='',recordLabel='',details=''){
  const row={id:uid(),action,moduleName:MODULE_LABELS[moduleName]||moduleName||'System',recordId:recordId||'',recordLabel:recordLabel||'',details:String(details||''),userId:currentUser?.id||'',userName:currentUser?.name||'System',userRole:currentUser?.role||'System',device:navigator.userAgent.includes('Android')?'Android browser':navigator.platform||'Browser',createdAt:new Date().toISOString()};
  await db.put('audit',row);return row;
}
async function verifyCurrentUserPassword(password){
  if(!currentUser?.id)throw new Error('Sesi pengguna tidak sah. Log masuk semula.');
  if(!String(password||''))throw new Error('Password akaun diperlukan untuk mengesahkan perubahan.');
  const stored=await db.get('users',currentUser.id);
  if(!stored?.passHash||!(await verifyHash(String(password),stored.passSalt,stored.passHash)))throw new Error('Password akaun pengguna yang sedang log masuk tidak betul.');
  return stored;
}
function auditValue(key,value){
  if(value===undefined||value===null||value==='')return '—';
  if(['amount','paidAmount','receivedAmount','refundAmount'].includes(key))return formatMYR(value);
  if(key==='status')return STATUS_LABELS[value]||value;
  if(/date|joined|reportedAt|submitted|publishDate|expiryDate/i.test(key)&&/^\d{4}-\d{2}-\d{2}$/.test(String(value)))return niceDate(value);
  return String(value).replace(/[\r\n]+/g,' ').slice(0,120);
}
function auditChangeSummary(module,before,after,isNew=false){
  const fields=TABLE_CONFIG[module]?.fields||[];const changes=[];const noteKeys=['note','internalNote'];
  if(isNew){for(const f of fields){if(['file','attachment',...noteKeys].includes(f.key))continue;const v=after[f.key];if(v!==undefined&&v!==null&&String(v).trim()!=='')changes.push(`${f.label}: ${auditValue(f.key,v)}`);}for(const key of noteKeys){const f=fields.find(x=>x.key===key);if(f&&String(after[key]||'').trim())changes.push(`${f.label}: diisi`);}return `Rekod baharu. ${changes.slice(0,7).join(' · ')}`.slice(0,900);}
  for(const f of fields){if(['file','attachment',...noteKeys].includes(f.key))continue;const a=before?.[f.key]??'';const b=after?.[f.key]??'';if(String(a)!==String(b))changes.push(`${f.label}: ${auditValue(f.key,a)} → ${auditValue(f.key,b)}`);}
  for(const key of noteKeys)if(String(before?.[key]||'')!==String(after?.[key]||''))changes.push(`${fields.find(x=>x.key===key)?.label||'Catatan'} dikemas kini`);
  if(before?.fileName!==after?.fileName||before?.fileData!==after?.fileData){if(after?.fileName)changes.push(`Lampiran dikemas kini: ${after.fileName}`);else if(before?.fileName)changes.push('Lampiran dibuang');}
  return (changes.length?changes.join(' · '):'Maklumat rekod dikemas kini.').slice(0,900);
}
async function nextReference(table,prefix){const rows=await db.all(table);let n=rows.length+1;let ref;const existing=new Set(rows.map(r=>r.referenceNo||r.caseNo||r.receiptNo));do{ref=`UNIKI-${prefix}-${String(n++).padStart(6,'0')}`;}while(existing.has(ref));return ref;}
async function maybeAutoSnapshot(){if(!(await getSetting('autoSnapshot',false)))return;const day=todayISO();if(await getSetting('lastAutoSnapshot','')===day)return;await db.saveSnapshot();await setSetting('lastAutoSnapshot',day);}
function normalizePaymentStatus(module,status){
  if(module==='payments'&&['Verified','Disahkan'].includes(status))return 'Paid';
  if(module==='receivedPayments'&&['Verified','Approved'].includes(status))return 'Fully Received';
  return status;
}
function nearlyEqualMoney(a,b){return Math.abs((Number(a)||0)-(Number(b)||0))<0.005;}
function financeFieldChanged(key,a,b){return ['amount','paidAmount','receivedAmount','refundAmount'].includes(key)?!nearlyEqualMoney(a,b):String(a??'')!==String(b??'');}
function financeStatusApprovedBy(record){return record?.approvalStatus==='Approved'||Boolean(record?.approvedBy);}
function prepareFinanceLedgerEdit(module,record,existing,{canApprove=false,actorId='',actorName='',actorRole='',at=new Date().toISOString()}={}){
  if(!existing||!['income','expenses'].includes(module))return record;
  const keys=module==='income'?['date','category','source','amount','method','reference']:['date','category','vendor','amount','method','reference'];
  const changed=keys.some(key=>financeFieldChanged(key,existing[key],record[key]));if(!changed)return record;
  if(existing.receiptNo)throw new Error('Resit rasmi telah diterbitkan. Butiran kewangan tidak boleh ditulis semula; rekodkan pelarasan sebagai transaksi berasingan dan gunakan Catatan untuk nota susulan.');
  const previous=String(existing.status||'').toUpperCase();if(!['POSTED','APPROVED','REJECTED'].includes(previous))return record;
  const history=Array.isArray(existing.approvalHistory)?[...existing.approvalHistory]:[];
  if(canApprove){
    const nextStatus=previous==='APPROVED'?'Approved':'Posted';
    return {...record,status:nextStatus,requestedStatus:undefined,approvalStatus:'Approved',approvedBy:actorName,approvedById:actorId,approvedAt:at,approvalHistory:[...history,{action:'Approved edited financial entry',by:actorName,byId:actorId,role:actorRole,at}]};
  }
  return {...record,status:'Pending Approval',requestedStatus:'Posted',approvalStatus:'Pending Approval',approvedBy:'',approvedById:'',approvedAt:'',approvalHistory:[...history,{action:'Financial changes require approval',by:actorName,byId:actorId,role:actorRole,at}]};
}
async function processFinanceRecord(module,record,existing,{authorizeSettlement=false,fromApproval=false}={}){
  if(!['payments','receivedPayments'].includes(module))return record;
  const total=Number(record.amount);if(!Number.isFinite(total)||total<=0)throw new Error('Jumlah bil mesti lebih besar daripada sifar.');
  let target=normalizePaymentStatus(module,record.requestedStatus||record.status||(existing?.status)||(module==='payments'?'Pending Payment':'Pending Verification'));
  if(target==='Pending Approval'&&record.requestedStatus)target=normalizePaymentStatus(module,record.requestedStatus);
  if(fromApproval&&module==='receivedPayments'&&target==='Pending Verification'){
    const hasReceived=String(record.receivedAmount??'').trim()!=='';
    const actualForDecision=hasReceived?Number(record.receivedAmount):total;
    if(!hasReceived)record.receivedAmount=total;
    target=actualForDecision<total?'Partially Received':'Fully Received';
  }
  const rawReceived=String(record.receivedAmount??'').trim();
  const rawPaid=String(record.paidAmount??'').trim();
  let actual=module==='payments'
    ?(rawPaid!==''?Number(record.paidAmount):(existing?paidAmount(existing):(['Paid'].includes(target)?total:0)))
    :(rawReceived!==''?Number(record.receivedAmount):(existing?receivedAmount(existing):(['Pending Verification','Received','Fully Received'].includes(target)?total:0)));
  if(!Number.isFinite(actual)||actual<0)throw new Error(module==='payments'?'Jumlah dibayar tidak sah.':'Jumlah diterima tidak sah.');
  let refund=Number(record.refundAmount||0);if(!Number.isFinite(refund)||refund<0)throw new Error('Jumlah bayaran balik tidak sah.');
  if(module==='payments'){
    if(target==='Paid'&&rawPaid===''&&(!existing||actual===0))actual=total;
    if(target==='Paid'&&!nearlyEqualMoney(actual,total))throw new Error('Status Sudah Dibayar memerlukan Jumlah dibayar sama dengan Jumlah bayaran. Untuk amaun lebih kecil, pilih Bayaran Sebahagian.');
    if(target==='Partial'&&(!(actual>0)||!(actual<total)))throw new Error('Bayaran Sebahagian memerlukan jumlah dibayar melebihi sifar dan kurang daripada Jumlah bayaran.');
    if(target==='Refunded'&&(!(actual>0)||!(refund>0)||refund>actual))throw new Error('Bayaran Dikembalikan memerlukan jumlah dibayar dan jumlah refund yang sah (refund tidak boleh melebihi bayaran).');
    if(target==='Refunded'&&!String(record.note||'').trim())throw new Error('Masukkan sebab refund pada ruangan Catatan.');
    if(target!=='Refunded'&&refund>0)throw new Error('Jumlah refund hanya boleh direkodkan apabila status Bayaran Dikembalikan (Refund).');
    if(['Pending Payment','Unpaid','Overdue','Cancelled'].includes(target)&&(actual>0||refund>0))throw new Error('Rekod yang sudah dibayar tidak boleh ditukar kepada status belum dibayar atau dibatalkan. Gunakan status Bayaran Dikembalikan dan nyatakan refund.');
    if(!['Paid','Partial','Refunded','Pending Payment','Unpaid','Overdue','Cancelled','Pending Approval'].includes(target))throw new Error('Status pembayaran tidak sah.');
    if(target==='Cancelled'&&!String(record.note||'').trim())throw new Error('Masukkan sebab pembatalan pada ruangan Catatan.');
    if(existing?.receiptNo){
      const locked=['date','payer','billNo','amount','paidAmount','accountBank','method','category','reference'];const baseline={...existing,paidAmount:paidAmount(existing)};const changed=locked.find(key=>financeFieldChanged(key,baseline[key],record[key]));
      if(changed)throw new Error('Resit telah diterbitkan. Butiran transaksi tidak boleh ditulis semula; rekod ansuran/pelarasan secara berasingan. Catatan susulan boleh ditambah melalui tindakan Catatan.');
      if(existing.refundReceiptNo&&target==='Refunded'&&!nearlyEqualMoney(existing.refundAmount,refund))throw new Error('Resit refund telah diterbitkan. Amaun refund tidak boleh ditulis semula; rekodkan pelarasan sebagai transaksi baharu.');
      if(target!==normalizePaymentStatus(module,existing.status)&&target!=='Refunded'&&target!==existing.requestedStatus)throw new Error('Resit telah diterbitkan. Gunakan status Bayaran Dikembalikan untuk merekod refund.');
    }
    record.paidAmount=actual;
    if(['Paid','Partial','Refunded'].includes(target)){
      const existingRefund=Number(existing?.refundAmount||0);const changed=!existing||normalizePaymentStatus(module,existing.status)!==target||!nearlyEqualMoney(paidAmount(existing),actual)||!nearlyEqualMoney(existingRefund,refund)||!financeStatusApprovedBy(existing);
      if(target==='Refunded'&&existing?.receiptNo&&!authorizeSettlement){record.status=existing.status;record.requestedStatus='Refunded';record.requestedRefundAmount=refund;record.refundAmount=existingRefund;record.approvalStatus='Pending Approval';record.netPaidAmount=netPaidAmount(existing);return record;}
      if(changed&&!authorizeSettlement){
        if(existing?.receiptNo){record.status=existing.status;record.requestedStatus=target;record.approvalStatus='Pending Approval';record.refundAmount=existingRefund;}
        else{record.status='Pending Approval';record.requestedStatus=target;record.approvalStatus='Pending Approval';record.refundAmount=refund;}
      }else{
        record.status=target;record.refundAmount=refund;delete record.requestedStatus;delete record.requestedRefundAmount;
        if(changed||!existing?.approvedBy){record.approvalStatus='Approved';record.approvedBy=currentUser.name;record.approvedById=currentUser.id;record.approvedAt=new Date().toISOString();record.approvalHistory=[...(existing?.approvalHistory||[]),{action:target==='Refunded'?'Refunded':'Approved',by:currentUser.name,byId:currentUser.id,at:record.approvedAt}];}
        if(!record.receiptNo)record.receiptNo=await nextReference('payments','PAYRCPT');
        if(target==='Refunded'&&(!existing?.refundReceiptNo||!nearlyEqualMoney(existingRefund,refund)))record.refundReceiptNo=await nextReference('payments','REFUND');
      }
    }else{
      if(existing?.receiptNo&&target!=='Refunded'&&target!==existing.status)throw new Error('Rekod yang mempunyai resit tidak boleh dibatalkan atau diturunkan statusnya. Rekodkan bayaran balik sebagai refund.');
      record.status=target;record.refundAmount=0;delete record.requestedStatus;delete record.requestedRefundAmount;
      if(target==='Cancelled'){record.cancelledAt=record.cancelledAt||new Date().toISOString();record.cancelledBy=currentUser.name;record.cancelledById=currentUser.id;record.cancelReason=String(record.note||'').trim();}
    }
    record.netPaidAmount=record.status==='Refunded'&&financeStatusApprovedBy(record)?Math.max(0,actual-refund):(['Paid','Partial','Verified','Disahkan'].includes(record.status)?actual:0);
    return record;
  }
  // Incoming / receipt workflow.
  if(target==='Pending Verification'&&rawReceived===''&&(!existing||actual===0))actual=total;
  if(['Received','Fully Received'].includes(target)&&rawReceived===''&&actual===0)actual=total;
  if(target==='Partially Received'&&(!(actual>0)||!(actual<total)))throw new Error('Bayaran Sebahagian Diterima memerlukan jumlah diterima melebihi sifar dan kurang daripada jumlah keseluruhan.');
  if(target==='Fully Received'&&!nearlyEqualMoney(actual,total))throw new Error('Bayaran Penuh Diterima memerlukan Jumlah diterima sama dengan jumlah keseluruhan.');
  if(target==='Received'&&(!(actual>0)||actual>total))throw new Error('Bayaran Diterima memerlukan jumlah diterima antara sifar dan jumlah keseluruhan.');
  if(target==='Refunded'&&(!(actual>0)||!(refund>0)||refund>actual))throw new Error('Bayaran Dikembalikan memerlukan amaun diterima dan refund yang sah.');
  if(target==='Refunded'&&!String(record.note||'').trim())throw new Error('Masukkan sebab bayaran balik pada ruangan Catatan.');
  if(target!=='Refunded'&&refund>0)throw new Error('Jumlah refund hanya boleh direkodkan apabila status Bayaran Dikembalikan.');
  if(['Pending Payment','Rejected'].includes(target)&&(actual>0||refund>0))throw new Error(target==='Rejected'?'Bayaran yang telah diterima tidak boleh ditolak; rekodkan bayaran balik.':'Status Menunggu Bayaran memerlukan Jumlah diterima RM0.00.');
  if(!['Pending Verification','Pending Payment','Partially Received','Received','Fully Received','Rejected','Refunded','Pending Approval'].includes(target))throw new Error('Status terimaan bayaran tidak sah.');
  if(['Rejected'].includes(target)&&!String(record.note||'').trim())throw new Error('Masukkan sebab penolakan pada ruangan Catatan.');
  if(existing?.receiptNo){
    const locked=['date','payer','memberAccount','billNo','purpose','amount','receivedAmount','method','accountBank','reference'];const baseline={...existing,receivedAmount:receivedAmount(existing)};const changed=locked.find(key=>financeFieldChanged(key,baseline[key],record[key]));
    if(changed)throw new Error('Resit telah diterbitkan. Butiran transaksi tidak boleh ditulis semula; rekod ansuran/pelarasan secara berasingan. Catatan susulan boleh ditambah melalui tindakan Catatan.');
    if(existing.refundReceiptNo&&target==='Refunded'&&!nearlyEqualMoney(existing.refundAmount,refund))throw new Error('Resit refund telah diterbitkan. Amaun refund tidak boleh ditulis semula; rekodkan pelarasan sebagai transaksi baharu.');
    if(target!==normalizePaymentStatus(module,existing.status)&&target!=='Refunded'&&target!==existing.requestedStatus)throw new Error('Resit telah diterbitkan. Untuk pemulangan wang, gunakan status Bayaran Dikembalikan.');
  }
  record.receivedAmount=actual;
  if(target==='Pending Verification'){
    record.status='Pending Verification';record.refundAmount=0;record.approvalStatus=record.approvalStatus||'Pending Verification';delete record.requestedStatus;delete record.requestedRefundAmount;
  }else if(['Partially Received','Received','Fully Received','Refunded'].includes(target)){
    const existingRefund=Number(existing?.refundAmount||0);const changed=!existing||normalizePaymentStatus(module,existing.status)!==target||!nearlyEqualMoney(receivedAmount(existing),actual)||!nearlyEqualMoney(existingRefund,refund)||!financeStatusApprovedBy(existing);
    if(target==='Refunded'&&existing?.receiptNo&&!authorizeSettlement){record.status=existing.status;record.requestedStatus='Refunded';record.requestedRefundAmount=refund;record.refundAmount=existingRefund;record.approvalStatus='Pending Approval';record.netReceivedAmount=netReceivedAmount(existing);return record;}
    if(changed&&!authorizeSettlement){
      if(existing?.receiptNo){record.status=existing.status;record.requestedStatus=target;record.approvalStatus='Pending Approval';record.refundAmount=existingRefund;}
      else{record.status='Pending Verification';record.requestedStatus=target;record.approvalStatus='Pending Approval';record.refundAmount=refund;}
    }else{
      record.status=target;record.refundAmount=refund;delete record.requestedStatus;delete record.requestedRefundAmount;
      if(changed||!existing?.approvedBy){record.approvalStatus='Approved';record.approvedBy=currentUser.name;record.approvedById=currentUser.id;record.approvedAt=new Date().toISOString();record.approvalHistory=[...(existing?.approvalHistory||[]),{action:target==='Refunded'?'Refunded':'Approved',by:currentUser.name,byId:currentUser.id,at:record.approvedAt}];}
      if(!record.receiptNo)record.receiptNo=await nextReference('receivedPayments','RCPT');
      if(target==='Refunded'&&(!existing?.refundReceiptNo||!nearlyEqualMoney(existingRefund,refund)))record.refundReceiptNo=await nextReference('receivedPayments','REFUND');
    }
  }else if(target==='Rejected'){
    if(!authorizeSettlement){record.status='Pending Verification';record.requestedStatus='Rejected';record.approvalStatus='Pending Approval';record.refundAmount=0;}
    else{record.status='Rejected';record.refundAmount=0;record.approvalStatus='Rejected';record.approvedBy=currentUser.name;record.approvedById=currentUser.id;record.approvedAt=new Date().toISOString();record.approvalHistory=[...(existing?.approvalHistory||[]),{action:'Rejected',by:currentUser.name,byId:currentUser.id,at:record.approvedAt}];delete record.requestedStatus;}
  }else{
    if(existing?.receiptNo&&target!=='Refunded'&&target!==existing.status)throw new Error('Rekod yang mempunyai resit tidak boleh dibatalkan atau diturunkan statusnya. Rekodkan bayaran balik sebagai transaksi refund.');
    record.status=target;record.refundAmount=0;delete record.requestedStatus;delete record.requestedRefundAmount;
  }
  record.netReceivedAmount=record.status==='Refunded'&&financeStatusApprovedBy(record)?Math.max(0,actual-refund):(['Partially Received','Received','Fully Received','Verified','Approved'].includes(record.status)?actual:0);
  return record;
}
async function serviceSave(module,data,{passwordVerified=false}={}){
  const existing=data.id?await db.get(module,data.id):null;if(existing)guard(module,'view');guard(module,existing?'edit':'add');
  if((existing||FINANCE_TABLES.includes(module))&&!passwordVerified)throw new Error('Pengesahan password diperlukan sebelum perubahan disimpan.');
  const record={...existing,...data};
  for(const f of (TABLE_CONFIG[module]?.fields||[])){const value=record[f.key];if(f.required){if(f.type==='file'?!record.fileData:value===undefined||value===null||String(value).trim()==='')throw new Error(`${f.label} wajib diisi.`);}if(f.type==='email'&&value&&!validEmail(String(value)))throw new Error(`Format ${f.label.toLowerCase()} tidak sah.`);if(f.type==='number'&&value!==undefined&&value!==null&&String(value).trim()!==''){const number=Number(value);if(!Number.isFinite(number)||f.min!==undefined&&number<Number(f.min))throw new Error(`${f.label} tidak sah.`);if(f.step==='1'&&!Number.isInteger(number))throw new Error(`${f.label} mesti nombor bulat.`);}}
  if(!existing){record.createdBy=currentUser.id;record.createdByName=currentUser.name;record.createdAt=new Date().toISOString();}
  if(module==='members'){
    if(!record.name?.trim())throw new Error('Nama ahli wajib diisi.');if(!validEmail(record.email))throw new Error('Format email tidak sah.');if(!validPhone(record.phone))throw new Error('Format nombor telefon tidak sah.');
    const rows=await db.all('members');const duplicate=rows.find(r=>r.id!==record.id&&((record.email&&r.email?.toLowerCase()===record.email.toLowerCase())||(record.phone&&r.phone===record.phone)));
    if(duplicate)throw new Error('Ahli dengan email atau nombor telefon ini telah wujud.');
    if(record.memberNo){if(rows.some(r=>r.id!==record.id&&r.memberNo?.toLowerCase()===String(record.memberNo).toLowerCase()))throw new Error('No. ahli ini telah digunakan.');}else record.memberNo=await nextReference('members','MEM');
  }
  if(module==='users')throw new Error('Gunakan pengurusan pengguna.');
  if(module==='events'){
    if(record.date&&!/^\d{4}-\d{2}-\d{2}$/.test(record.date))throw new Error('Tarikh acara tidak sah.');if(record.capacity&&(!Number.isInteger(Number(record.capacity))||Number(record.capacity)<1))throw new Error('Kapasiti mesti nombor bulat positif.');
    record.capacity=record.capacity?Number(record.capacity):'';record.registrations=Number(record.registrations||0);
  }
  if(FINANCE_TABLES.includes(module)){
    const amount=Number(record.amount);if(!Number.isFinite(amount)||amount<=0)throw new Error('Jumlah mesti nombor lebih besar daripada sifar.');
    record.amount=amount;record.date=record.date||todayISO();if(!/^\d{4}-\d{2}-\d{2}$/.test(record.date)||isNaN(new Date(record.date+'T00:00:00').getTime()))throw new Error('Tarikh transaksi tidak sah.');
    const sameTable=await db.all(module);
    if(record.reference&&sameTable.some(r=>r.id!==record.id&&r.reference?.trim().toLowerCase()===String(record.reference).trim().toLowerCase()))throw new Error('No. rujukan transaksi ini telah digunakan.');
    if(record.reference&&sameTable.some(r=>r.id!==record.id&&Number(r.amount)===amount&&r.date===record.date&&r.payer===record.payer&&r.source===record.source&&r.vendor===record.vendor))throw new Error('Transaksi serupa telah wujud. Semak duplicate sebelum menyimpan.');
    if(module==='income'){record.referenceNo=record.referenceNo||await nextReference('income','INC');if(!existing)record.status='Pending Approval';}
    if(module==='expenses'){record.referenceNo=record.referenceNo||await nextReference('expenses','EXP');if(!existing)record.status='Pending Approval';}
    if(existing&&['income','expenses'].includes(module))Object.assign(record,prepareFinanceLedgerEdit(module,record,existing,{canApprove:can(module,'approve'),actorId:currentUser.id,actorName:currentUser.name,actorRole:currentUser.role}));
    if(['income','expenses'].includes(module)&&['Approved','Posted'].includes(record.status)&&financeStatusApprovedBy(record)&&!record.receiptNo)record.receiptNo=await nextReference(module,module==='income'?'INC-RCPT':'EXP-RCPT');
    if(module==='payments'){record.referenceNo=record.referenceNo||await nextReference('payments','PAY');if(!existing&&!record.status)record.status='Pending Payment';}
    if(module==='receivedPayments'){record.referenceNo=record.referenceNo||await nextReference('receivedPayments','RCV');if(!existing&&!record.status)record.status='Pending Verification';}
    if(['payments','receivedPayments'].includes(module)){
      await processFinanceRecord(module,record,existing,{authorizeSettlement:can(module,'approve'),fromApproval:false});
      record.amount=amount;
    }
    if(record.memberAccount){const lookup=record.memberAccount.toLowerCase();const linked=(await db.all('users')).find(u=>u.email?.toLowerCase()===lookup||u.username?.toLowerCase()===lookup);if(!linked)throw new Error('Akaun ahli berkaitan tidak ditemui. Semak email / username.');record.payerUserId=linked.id;}
  }
  if(module==='incidents'){record.caseNo=record.caseNo||await nextReference('incidents','INC');record.status=record.status||'New';record.reporterId=existing?.reporterId||currentUser.id;}
  if(module==='complaints'){record.reference=record.reference||await nextReference('complaints','CMP');record.status=record.status||'New';record.reporterId=existing?.reporterId||currentUser.id;}
  if(module==='announcements'){record.readBy=record.readBy||[];record.status=record.status||'Draft';}
  if(module==='events'){record.eventNo=record.eventNo||await nextReference('events','EVT');}
  if(record.fileData&&!/\.(pdf|doc|docx|xls|xlsx|png|jpe?g|webp)$/i.test(record.fileName||''))throw new Error('Jenis lampiran tidak disokong. Gunakan PDF, Office atau imej.');
  if(module==='documents'){
    if(!record.fileData)throw new Error('Muat naik fail sebelum menyimpan dokumen.');
  }
  if(module==='households'){
    const people=await db.all('members');record.memberCount=people.filter(m=>(m.household||'').toLowerCase()===(record.name||'').toLowerCase()).length;
  }
  if(module==='volunteers'&&record.hours!==undefined){record.hours=Number(record.hours||0);if(record.hours<0)throw new Error('Jam tidak boleh negatif.');}
  if(module==='announcements'&&record.expiryDate&&record.publishDate&&record.expiryDate<record.publishDate)throw new Error('Tarikh luput tidak boleh lebih awal daripada tarikh terbit.');
  if(existing){record.updatedAt=new Date().toISOString();record.updatedBy=currentUser.id;record.updatedByName=currentUser.name;}
  else{record.createdBy=record.createdBy||currentUser.id;record.createdByName=record.createdByName||currentUser.name;}
  let changeSummary=auditChangeSummary(module,existing,record,!existing);if(record.receiptNo&&!existing?.receiptNo)changeSummary+=` · Resit rasmi dijana: ${record.receiptNo}`;
  await maybeAutoSnapshot();
  const saved=await db.put(module,record);
  await writeAudit(existing?'Edit':'Tambah',module,saved.id,saved.name||saved.title||saved.referenceNo||saved.caseNo||saved.payer||'Rekod',changeSummary);
  return saved;
}
async function serviceDelete(module,id,password){
  guard(module,'view');guard(module,'delete');await verifyCurrentUserPassword(password);const row=await db.get(module,id);if(!row)throw new Error('Rekod tidak ditemui.');
  if(!canDeleteFinanceRow(module,row))throw new Error('Rekod kewangan yang telah diluluskan, dibayar, diterima atau mempunyai resit tidak boleh dipadam. Gunakan Batal atau Bayaran Dikembalikan supaya jejak audit dan resit kekal.');
  await maybeAutoSnapshot();await db.remove(module,id);await writeAudit('Padam',module,id,row.name||row.title||row.referenceNo||'Rekod','Rekod dipadam oleh pengguna berizin selepas pengesahan password.');return true;
}
async function persistFinanceApproval(module,id){
  guard(module,'view');guard(module,'approve');if(!FINANCE_TABLES.includes(module))throw new Error('Tindakan kelulusan tidak tersedia.');
  const row=await db.get(module,id);if(!row)throw new Error('Rekod tidak ditemui.');const before={...row};
  if(module==='income'||module==='expenses'){
    if(row.status!=='Pending Approval')throw new Error('Rekod ini bukan dalam status menunggu kelulusan.');
    row.status='Posted';row.approvalStatus='Approved';row.approvedBy=currentUser.name;row.approvedById=currentUser.id;row.approvedAt=new Date().toISOString();row.approvalHistory=[...(row.approvalHistory||[]),{action:'Approved',by:currentUser.name,byId:currentUser.id,at:row.approvedAt}];if(!row.receiptNo)row.receiptNo=await nextReference(module,module==='income'?'INC-RCPT':'EXP-RCPT');
  }else{
    const target=normalizePaymentStatus(module,row.requestedStatus||row.status);
    if(module==='payments'){
      if(!['Pending Approval','Paid','Partial','Refunded'].includes(row.status)&&!row.requestedStatus)throw new Error('Rekod ini tidak menunggu kelulusan pembayaran.');
      if(['Paid','Partial','Refunded'].includes(row.status)&&financeStatusApprovedBy(row)&&!row.requestedStatus)throw new Error('Pembayaran ini telah disahkan.');
      if(target==='Refunded'&&row.requestedRefundAmount!==undefined)row.refundAmount=Number(row.requestedRefundAmount||0);
      row.requestedStatus=target;row.status=target;
    }else{
      if(!['Pending Verification','Pending Approval','Partially Received','Received','Fully Received','Refunded','Verified','Approved'].includes(row.status)&&!row.requestedStatus)throw new Error('Terimaan ini tidak menunggu pengesahan.');
      if(['Partially Received','Received','Fully Received','Refunded','Verified','Approved'].includes(row.status)&&financeStatusApprovedBy(row)&&!row.requestedStatus)throw new Error('Terimaan ini telah disahkan.');
      if(target==='Refunded'&&row.requestedRefundAmount!==undefined)row.refundAmount=Number(row.requestedRefundAmount||0);
      row.requestedStatus=target;row.status=target;
    }
    await processFinanceRecord(module,row,before,{authorizeSettlement:true,fromApproval:true});
  }
  row.updatedAt=new Date().toISOString();row.updatedBy=currentUser.id;row.updatedByName=currentUser.name;
  let summary=auditChangeSummary(module,before,row,false);if(row.receiptNo&&!before.receiptNo)summary+=` · Resit rasmi dijana: ${row.receiptNo}`;await maybeAutoSnapshot();await db.put(module,row);
  await writeAudit(row.status==='Rejected'?'Tolak / sahkan':'Approve / sahkan',module,id,row.receiptNo||row.referenceNo||'Transaksi',summary);
  return row;
}
async function approveRecord(module,id){
  guard(module,'view');guard(module,'approve');const row=await db.get(module,id);if(!row)throw new Error('Rekod tidak ditemui.');
  const target=row.requestedStatus||row.status;const actualAmount=module==='payments'?paidAmount(row):module==='receivedPayments'?receivedAmount(row):Number(row.amount||0);const amountLabel=module==='payments'?'Jumlah dibayar':'Jumlah diterima';
  const preview=`<div class="approval-preview"><div><span>Status diminta</span><strong>${escapeHtml(STATUS_LABELS[target]||target)}</strong></div><div><span>Jumlah bil</span><strong>${formatMYR(row.amount)}</strong></div>${['payments','receivedPayments'].includes(module)?`<div><span>${amountLabel}</span><strong>${formatMYR(actualAmount)}</strong></div>`:''}${row.requestedRefundAmount!==undefined||target==='Refunded'?`<div><span>Jumlah refund diminta</span><strong>${formatMYR(row.requestedRefundAmount??row.refundAmount??0)}</strong></div>`:''}<div><span>Rujukan</span><strong>${escapeHtml(row.referenceNo||row.receiptNo||row.reference||'—')}</strong></div>${row.note?`<div class="approval-note"><span>Catatan</span><strong>${escapeHtml(row.note)}</strong></div>`:''}</div>`;
  const body=`${preview}<div class="info-callout">Sahkan jumlah, bukti dan status sebelum meluluskan. Nama pengguna, peranan dan masa akan direkodkan.</div><form id="approval-form"><div class="form-grid"><div class="form-field span-2"><label for="approval-password">Sahkan password akaun anda *</label><input id="approval-password" name="password" type="password" required autocomplete="current-password"></div></div></form>`;
  const dlg=openDialog('Semak / lulus transaksi',`${MODULE_LABELS[module]||module} · ${row.referenceNo||row.receiptNo||row.payer||'Rekod'}`,body,`<button class="btn btn-secondary" data-action="close-dialog">Kembali</button><button class="btn btn-primary" type="submit" form="approval-form">${icon('check')} Sahkan & lulus</button>`);
  $('#approval-form',dlg).addEventListener('submit',async e=>{e.preventDefault();try{await verifyCurrentUserPassword(new FormData(e.currentTarget).get('password'));const saved=await persistFinanceApproval(module,id);closeDialog();await renderApp();toast(saved.status==='Rejected'?'Penolakan direkodkan':'Kelulusan direkodkan',saved.status==='Refunded'?`Resit refund ${saved.refundReceiptNo||''} tersedia.`:'Status kewangan berjaya dikemas kini.');}catch(err){toast('Tidak dapat meluluskan',err.message||'Sila cuba semula.','error');}});
}
async function addRecordNote(module,id){
  guard(module,'view');guard(module,'edit');const row=await db.get(module,id);if(!row||!visibleRows(module,[row]).length)throw new Error('Rekod tidak ditemui atau anda tiada akses.');
  const body=`<form id="record-note-form"><div class="form-grid"><div class="form-field span-2"><label for="record-note-text">Catatan / nota susulan *</label><textarea id="record-note-text" name="note" required maxlength="1500" placeholder="Tulis nota yang akan disimpan bersama rekod..."></textarea></div><div class="form-field span-2"><label for="record-note-password">Sahkan password akaun anda *</label><input id="record-note-password" name="password" type="password" required autocomplete="current-password"><small class="hint">Catatan mempunyai cap masa dan identiti pengguna dalam sejarah rekod.</small></div></div></form>`;
  const dlg=openDialog('Tambah catatan',`${row.referenceNo||row.receiptNo||row.title||row.name||'Rekod'} · ${lastNoteCount(row)} catatan terdahulu`,body,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-primary" type="submit" form="record-note-form">${icon('check')} Simpan catatan</button>`);
  $('#record-note-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const note=String(fd.get('note')||'').trim();if(!note)return;try{await verifyCurrentUserPassword(fd.get('password'));const fresh=await db.get(module,id);if(!fresh)throw new Error('Rekod tidak ditemui.');const item={id:uid(),text:note,userId:currentUser.id,userName:currentUser.name,userRole:currentUser.role,createdAt:new Date().toISOString()};fresh.notes=[...(Array.isArray(fresh.notes)?fresh.notes:[]),item];fresh.updatedAt=item.createdAt;fresh.updatedBy=currentUser.id;fresh.updatedByName=currentUser.name;await maybeAutoSnapshot();await db.put(module,fresh);await writeAudit('Tambah catatan',module,id,fresh.referenceNo||fresh.receiptNo||fresh.title||fresh.name||'Rekod',`Catatan #${fresh.notes.length} ditambah.`);closeDialog();await renderApp();toast('Catatan disimpan','Nama pengguna dan masa telah direkodkan.');}catch(err){toast('Catatan tidak disimpan',err.message||'Sila cuba semula.','error');}});
}
async function cancelFinanceRecord(module,id){
  guard(module,'view');guard(module,'edit');if(!['payments','receivedPayments'].includes(module))throw new Error('Pembatalan hanya tersedia untuk transaksi kewangan.');const row=await db.get(module,id);if(!row||!canCancelFinanceRow(module,row))throw new Error('Rekod ini tidak boleh dibatalkan. Bayaran yang telah dibuat perlu direkodkan sebagai refund.');
  const body=`<div class="danger-callout">Pembatalan menutup permohonan yang belum disahkan dan kekal dalam jejak audit. Ia tidak memindahkan atau memulangkan wang. Jika wang telah disahkan/dipindahkan, gunakan aliran refund.</div><form id="finance-cancel-form"><div class="form-grid"><div class="form-field span-2"><label for="cancel-reason">Sebab pembatalan *</label><textarea id="cancel-reason" name="reason" required maxlength="1000"></textarea></div><div class="form-field span-2"><label for="cancel-password">Sahkan password akaun anda *</label><input id="cancel-password" name="password" type="password" required autocomplete="current-password"></div></div></form>`;
  const dlg=openDialog('Batal transaksi',`${row.referenceNo||row.receiptNo||'Rekod kewangan'} · ${formatMYR(row.amount)}`,body,`<button class="btn btn-secondary" data-action="close-dialog">Kembali</button><button class="btn btn-danger" type="submit" form="finance-cancel-form">${icon('close')} Sahkan batal</button>`);
  $('#finance-cancel-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const reason=String(fd.get('reason')||'').trim();try{await verifyCurrentUserPassword(fd.get('password'));const fresh=await db.get(module,id);if(!fresh||!canCancelFinanceRow(module,fresh))throw new Error('Status rekod telah berubah dan tidak lagi boleh dibatalkan.');const before={...fresh};fresh.status='Cancelled';fresh.cancelledAt=new Date().toISOString();fresh.cancelledBy=currentUser.name;fresh.cancelledById=currentUser.id;fresh.cancelReason=reason;fresh.updatedAt=fresh.cancelledAt;fresh.updatedBy=currentUser.id;fresh.updatedByName=currentUser.name;fresh.approvalStatus='Cancelled';delete fresh.requestedStatus;await maybeAutoSnapshot();await db.put(module,fresh);await writeAudit('Batal transaksi',module,id,fresh.referenceNo||fresh.receiptNo||'Transaksi',`Sebab: ${reason.slice(0,300)} · ${auditChangeSummary(module,before,fresh,false)}`);closeDialog();await renderApp();toast('Transaksi dibatalkan','Sebab dan pengguna yang membatalkan telah direkodkan.');}catch(err){toast('Pembatalan tidak berjaya',err.message||'Sila cuba semula.','error');}});
}
async function handleClick(event){
  const route=event.target.closest('[data-route]');if(route){const next=route.dataset.route;if(!canOpen(next)){toast('Akses tidak dibenarkan','Anda tidak mempunyai permission untuk modul ini.','error');return;}currentPage=next;listSearchValue='';tablePage=1;window._statusValue='all';$('#sidebar')?.classList.remove('open');$('#mobile-overlay')?.classList.remove('show');await renderApp();$('#main-content')?.scrollTo(0,0);return;}
  const el=event.target.closest('[data-action]');if(!el)return;const action=el.dataset.action;
  try{
    if(action==='show-pass'){const input=$(`#${CSS.escape(el.dataset.target)}`);if(input){input.type=input.type==='password'?'text':'password';el.textContent=input.type==='text'?'Sembunyi':'Papar';}}
    else if(action==='auth-forgot'){authMode='forgot';await renderAuth();}
    else if(action==='auth-login'){authMode='login';await renderAuth();}
    else if(action==='open-menu'){const side=$('#sidebar');if(side){side.classList.add('open');$('#mobile-overlay')?.classList.add('show');}}
    else if(action==='close-menu'){const side=$('#sidebar');side?.classList.remove('open');$('#mobile-overlay')?.classList.remove('show');}
    else if(action==='close-dialog'){closeDialog();}
    else if(action==='logout'){await logout();}
    else if(action==='toggle-theme'){const theme=document.body.classList.contains('theme-dark')?'light':'dark';await setSetting('theme',theme);applyTheme(theme);await renderApp();}
    else if(action==='set-theme'){const theme=el.dataset.theme;await setSetting('theme',theme);applyTheme(theme);await renderApp();toast('Tema dikemas kini',theme==='dark'?'Dark mode diaktifkan.':'Light mode diaktifkan.');}
    else if(action==='settings-tab'){settingsTab=el.dataset.tab;await renderApp();}
    else if(action==='new-record'){await openRecordForm(el.dataset.module);}
    else if(action==='quick-add'){await openRecordForm(el.dataset.module);}
    else if(action==='edit-record'){await openRecordForm(el.dataset.module,el.dataset.id);}
    else if(action==='view-record'){await viewRecord(el.dataset.module,el.dataset.id);}
    else if(action==='view-receipt'){await viewReceipt(el.dataset.id,el.dataset.module,el.dataset.receiptKind||'receipt');}
    else if(action==='delete-record'){await confirmDelete(el.dataset.module,el.dataset.id);}
    else if(action==='approve-record'){await approveRecord(el.dataset.module,el.dataset.id);}
    else if(action==='mark-payment-paid'){guard('payments','edit');await openRecordForm('payments',el.dataset.id);}
    else if(action==='add-note'){await addRecordNote(el.dataset.module,el.dataset.id);}
    else if(action==='cancel-finance'){await cancelFinanceRecord(el.dataset.module,el.dataset.id);}
    else if(action==='event-register'){await registerForEvent(el.dataset.id);}
    else if(action==='event-preview-member'){await previewEventAsMember(el.dataset.id);}
    else if(action==='event-participants'){await showParticipants(el.dataset.id);}
    else if(action==='mark-read'){await markAnnouncementRead(el.dataset.id);}
    else if(action==='export-current'){await exportModule(el.dataset.module);}
    else if(action==='export-report'){await exportCurrentReport();}
    else if(action==='table-page'){tablePage=Number(el.dataset.page)||1;await renderApp();}
    else if(action==='print-page'){window.print();}
    else if(action==='print-receipt'){await printReceipt(el.dataset.id,el.dataset.module||'receivedPayments',el.dataset.receiptKind||'receipt');}
    else if(action==='download-file'){await downloadRecordFile(el.dataset.module,el.dataset.id);}
    else if(action==='notifications'){await showNotifications();}
    else if(action==='new-user'){await openUserForm();}
    else if(action==='edit-user'){await openUserForm(el.dataset.id);}
    else if(action==='delete-user'){await confirmDeleteUser(el.dataset.id);}
    else if(action==='new-role'){await openRoleForm();}
    else if(action==='edit-role'){await openRoleForm(el.dataset.id);}
    else if(action==='delete-role'){await deleteRole(el.dataset.id);}
    else if(action==='change-password'){await openPasswordForm();}
    else if(action==='edit-community'){await openCommunityForm();}
    else if(action==='factory-reset'){await startFactoryReset();}
    else if(action==='create-backup'){await openBackupDialog();}
    else if(action==='restore-backup'){openRestoreDialog();}
    else if(action==='snapshot-now'){await makeSnapshot();}
    else if(action==='restore-snapshot'){await restoreSnapshot(el.dataset.id);}
    else if(action==='sync-check'){await checkSyncReadiness();}
    else if(action==='qr-info'){await showQRRequirements();}
    else if(action==='ip-connect'){await openIPConnect();}
    else if(action==='toggle-ai-local'){const on=await getSetting('localAI',true);await setSetting('localAI',!on);await renderApp();toast('AI local helper',!on?'Dihidupkan.':'Dimatikan.');}
    else if(action==='ask-ai'){const q=el.dataset.question;await submitAIQuestion(q);}
    else if(action==='apply-report'){reportFilter=$('#report-type')?.value||'summary';reportFrom=$('#report-from')?.value||'';reportTo=$('#report-to')?.value||'';await renderApp();}
    else if(action==='import-csv'){openImportDialog();}
    else if(action==='install-pwa'){await installPWA();}
  }catch(err){toast('Tindakan tidak berjaya',err.message||'Sila cuba semula.','error');}
}
async function handleSubmit(event){
  const form=event.target;
  if(form.id==='login-form'){event.preventDefault();await doLogin(new FormData(form));return;}
  if(form.id==='setup-form'){event.preventDefault();await doSetup(new FormData(form));return;}
  if(form.id==='forgot-form'){event.preventDefault();await doForgot(new FormData(form));return;}
  if(form.id==='global-search-form'){event.preventDefault();const q=new FormData(form).get('query')?.toString().trim()||'';globalSearchValue=q;if(q)await runGlobalSearch(q);return;}
  if(form.id==='table-search-form'){event.preventDefault();const fd=new FormData(form);listSearchValue=fd.get('q')?.toString()||'';tablePage=1;const status=form.querySelector('[name="status"]');if(status){window._statusFilter=status.dataset.filterModule;window._statusValue=status.value;}await renderApp();return;}
  if(form.id==='ai-form'){event.preventDefault();const q=new FormData(form).get('question')?.toString().trim();if(q){form.reset();await submitAIQuestion(q);}return;}
}
async function handleChange(event){
  const target=event.target;
  if(target.matches('[data-filter-module]')){window._statusFilter=target.dataset.filterModule;window._statusValue=target.value;tablePage=1;await renderApp();}
  if(target.matches('[data-setting]')){const key=target.dataset.setting;if(key==='cloudAI'){target.checked=false;toast('AI Cloud belum dikonfigurasi','Tiada data dihantar ke provider cloud.','warning');return;}let value;if(key==='autoLogoutMinutes'){value=Number(target.value);autoLogoutMinutes=value;resetAutoLogoutTimer();}else{value=target.checked;}await setSetting(key,value);await writeAudit('Edit tetapan','settings',key,`${key}: ${value?'ON':'OFF'}`);if(key==='highContrast')applyTheme(await getSetting('theme','light'),value);toast('Tetapan disimpan',key==='autoLogoutMinutes'?`Log keluar automatik: ${value?value+' minit':'tidak aktif'}.`:`${key==='autoSnapshot'?'Snapshot automatik':key==='highContrast'?'Kontras tinggi':'AI local helper'} ${value?'diaktifkan':'dimatikan'}.`);}
}
function handleKeydown(event){if(event.key==='Escape'){const side=$('#sidebar');side?.classList.remove('open');$('#mobile-overlay')?.classList.remove('show');}}
async function doLogin(fd){
  const identity=String(fd.get('identity')||'').trim().toLowerCase();const password=String(fd.get('password')||'');
  const userRows=await db.all('users');const found=userRows.find(u=>u.email?.toLowerCase()===identity||u.username?.toLowerCase()===identity);
  if(!found||!(await verifyHash(password,found.passSalt,found.passHash))){toast('Log masuk gagal','Email/username atau password tidak betul.','error');return;}
  currentUser=found;authMode='login';autoLogoutMinutes=Number(await getSetting('autoLogoutMinutes',30));resetAutoLogoutTimer();if(fd.get('remember'))localStorage.setItem('uniki-user',found.id);else{sessionStorage.setItem('uniki-user',found.id);localStorage.removeItem('uniki-user');}
  await loadWorkspace();await writeAudit('Login','System',found.id,found.name);await renderApp();toast(`Selamat kembali, ${found.name.split(' ')[0]}`,'Anda berjaya log masuk.');
}
async function doSetup(fd){
  const communityName=String(fd.get('communityName')||'').trim();const name=String(fd.get('ownerName')||'').trim();const email=String(fd.get('email')||'').trim().toLowerCase();const phone=String(fd.get('phone')||'').trim();const username=String(fd.get('username')||'').trim().toLowerCase();const password=String(fd.get('password')||'');const password2=String(fd.get('password2')||'');const recovery=String(fd.get('recoveryKey')||'');
  if(!communityName||!name||!email||!username){toast('Maklumat belum lengkap','Sila isi semua medan wajib.','error');return;}
  if(!validEmail(email)){toast('Email tidak sah','Semak format email.','error');return;}if(password.length<8){toast('Password terlalu pendek','Gunakan sekurang-kurangnya 8 aksara.','error');return;}if(password!==password2){toast('Password tidak sepadan','Sahkan semula password anda.','error');return;}if(recovery.trim().length<6){toast('Kunci pemulihan terlalu pendek','Gunakan sekurang-kurangnya 6 aksara.','error');return;}if(!validPhone(phone)){toast('Telefon tidak sah','Semak format nombor telefon.','error');return;}
  const {salt,hash}=await hashPassword(password);const recoveryHash=await hashPassword(recovery);
  const owner={id:uid(),name,email,phone,username,role:'Owner',passSalt:salt,passHash:hash,recoverySalt:recoveryHash.salt,recoveryHash:recoveryHash.hash,createdAt:new Date().toISOString()};
  await db.put('communities',{id:'primary',name:communityName,email,phone,website:'',address:'',area:'',description:'',social:'',hours:'',createdAt:new Date().toISOString()});
  await db.put('users',owner);await seedRoles();currentUser=owner;autoLogoutMinutes=Number(await getSetting('autoLogoutMinutes',30));resetAutoLogoutTimer();sessionStorage.setItem('uniki-user',owner.id);await loadWorkspace();await writeAudit('Setup Owner','System',owner.id,owner.name);await renderApp();toast('Workspace berjaya dicipta',`${communityName} kini sedia digunakan.`);
}
async function doForgot(fd){
  const identity=String(fd.get('identity')||'').trim().toLowerCase();const key=String(fd.get('recoveryKey')||'');const password=String(fd.get('password')||'');const password2=String(fd.get('password2')||'');
  if(password.length<8||password!==password2){toast('Password tidak sah','Pastikan kedua-dua password sepadan dan sekurang-kurangnya 8 aksara.','error');return;}
  const found=(await db.all('users')).find(u=>u.email?.toLowerCase()===identity||u.username?.toLowerCase()===identity);
  if(!found||!found.recoveryHash||!(await verifyHash(key,found.recoverySalt,found.recoveryHash))){toast('Pengesahan gagal','Akaun atau kunci pemulihan tidak sepadan.','error');return;}
  const secure=await hashPassword(password);found.passSalt=secure.salt;found.passHash=secure.hash;await db.put('users',found);await writeAudit('Reset password','System',found.id,found.name);authMode='login';await renderAuth();toast('Password dikemas kini','Log masuk menggunakan password baharu.');
}
async function logout(){if(sessionTimer)clearTimeout(sessionTimer);sessionTimer=null;if(currentUser)await writeAudit('Logout','System',currentUser.id,currentUser.name);sessionStorage.removeItem('uniki-user');localStorage.removeItem('uniki-user');currentUser=null;community={};roles=[];currentPage='dashboard';authMode='login';await renderAuth();toast('Anda telah log keluar','Sesi local ditamatkan.');}

async function viewRecord(module,id){
  if(!canOpen(module)&&!['receipts'].includes(module))throw new Error('Akses tidak dibenarkan.');
  const row=await db.get(module,id);if(!row)throw new Error('Rekod tidak ditemui.');if(!visibleRows(module,[row]).length)throw new Error('Anda tidak mempunyai kebenaran untuk melihat rekod ini.');const cfg=TABLE_CONFIG[module];
  const labels=Object.fromEntries((cfg?.fields||[]).map(f=>[f.key,f.label]));Object.assign(labels,{receiptNo:'No. resit',refundReceiptNo:'No. resit refund',requestedStatus:'Status diminta',requestedRefundAmount:'Jumlah refund diminta',approvedBy:'Disahkan oleh',approvedAt:'Tarikh pengesahan',createdByName:'Dicipta oleh',updatedByName:'Kemaskini oleh',cancelReason:'Sebab pembatalan',cancelledBy:'Dibatalkan oleh',refundAmount:'Jumlah refund',netPaidAmount:'Bayaran bersih',netReceivedAmount:'Terimaan bersih'});
  const omit=new Set(['id','table','createdAt','updatedAt','createdBy','createdByName','updatedBy','updatedByName','fileData','passSalt','passHash','recoverySalt','recoveryHash','readBy','approvalHistory','notes']);
  const entries=Object.entries(row).filter(([k,v])=>!omit.has(k)&&v!==''&&v!==null&&v!==undefined&&typeof v!=='object'&&k!=='reauthPassword');
  const details=entries.map(([k,v])=>{let value=['amount','paidAmount','receivedAmount','refundAmount','netPaidAmount','netReceivedAmount'].includes(k)?formatMYR(v):(/date|joined|reportedAt|submitted|publishDate|expiryDate|approvedAt|cancelledAt/i.test(k)&&String(v).length>=10?escapeHtml(k.toLowerCase().endsWith('at')?shortDateTime(v):niceDate(String(v).slice(0,10))):k==='status'||k==='requestedStatus'?escapeHtml(STATUS_LABELS[v]||v):escapeHtml(v));return `<div class="record-detail"><small>${escapeHtml(labels[k]||titleCase(k))}</small><strong>${value}</strong></div>`}).join('');
  const noteFields=Object.entries(row).filter(([k,v])=>['body','description','note','internalNote','agenda','minutes','actionItems'].includes(k)&&v).map(([k,v])=>`<div class="record-note-legacy"><small>${escapeHtml(labels[k]||titleCase(k))}</small><div>${escapeHtml(v)}</div></div>`).join('');
  const noteHistory=Array.isArray(row.notes)?row.notes.map(n=>`<article class="record-note-item"><div><strong>${escapeHtml(n.userName||'Pengguna')}</strong><span>${escapeHtml(n.userRole||'')} · ${escapeHtml(shortDateTime(n.createdAt))}</span></div><p>${escapeHtml(n.text||'')}</p></article>`).join(''):'';
  const refundAvailable=!!(row.refundReceiptNo||row.requestedRefundAmount!==undefined||row.requestedStatus==='Refunded'||row.status==='Refunded');
  const eventPreviewButton=module==='events'&&currentUser.role!=='Member'&&can('events','view')?`<button class="btn btn-secondary" data-action="event-preview-member" data-id="${escapeHtml(id)}">${icon('eye')} Pratonton sebagai Ahli</button>`:'';
  const buttons=`${eventPreviewButton}${can(module,'edit')?`<button class="btn btn-secondary" data-action="edit-record" data-module="${module}" data-id="${escapeHtml(id)}">${icon('edit')} Edit</button>`:''}${can(module,'edit')?`<button class="btn btn-secondary" data-action="add-note" data-module="${module}" data-id="${escapeHtml(id)}">${icon('message')} Catatan</button>`:''}${row.fileData&&can(module,'view')?`<button class="btn btn-secondary" data-action="download-file" data-module="${module}" data-id="${escapeHtml(id)}">${icon('download')} Lampiran</button>`:FINANCE_TABLES.includes(module)&&can(module,'view')?`<button class="btn btn-secondary" disabled>${icon('file')} Lampiran belum dimuat naik</button>`:''}${FINANCE_TABLES.includes(module)&&can(module,'view')?`<button class="btn btn-secondary" data-action="view-receipt" data-module="${module}" data-id="${escapeHtml(id)}" data-receipt-kind="receipt">${icon('eye')} Paparkan resit</button><button class="btn btn-primary" data-action="print-receipt" data-module="${module}" data-id="${escapeHtml(id)}" data-receipt-kind="receipt">${icon('print')} Cetak resit</button>`:''}${refundAvailable&&['payments','receivedPayments'].includes(module)&&can(module,'view')?`<button class="btn btn-secondary" data-action="view-receipt" data-module="${module}" data-id="${escapeHtml(id)}" data-receipt-kind="refund">${icon('eye')} Paparkan refund</button><button class="btn btn-secondary" data-action="print-receipt" data-module="${module}" data-id="${escapeHtml(id)}" data-receipt-kind="refund">${icon('receipt')} Cetak resit refund</button>`:''}${['payments','receivedPayments'].includes(module)&&can(module,'edit')&&canCancelFinanceRow(module,row)?`<button class="btn btn-danger" data-action="cancel-finance" data-module="${module}" data-id="${escapeHtml(id)}">${icon('close')} Batal</button>`:''}`;
  const content=`${details?`<div class="record-detail-grid">${details}</div>`:''}${noteFields?`<div class="record-legacy-notes">${noteFields}</div>`:''}${row.fileName?`<div class="info-callout" style="margin-top:12px">Lampiran: ${escapeHtml(row.fileName)}</div>`:''}${row.approvalHistory?.length?`<div class="record-history"><strong>Sejarah keputusan</strong>${row.approvalHistory.map(a=>`<div>${escapeHtml(a.action)} · ${escapeHtml(a.by)}${a.at?' · '+escapeHtml(shortDateTime(a.at)):''}</div>`).join('')}</div>`:''}<section class="record-note-history"><div class="record-note-head"><strong>Catatan & jejak susulan</strong><span>${lastNoteCount(row)} catatan</span></div>${noteHistory||`<p class="hint">Belum ada catatan tambahan.</p>`}</section>`;
  openDialog(row.title||row.name||row.referenceNo||row.receiptNo||row.caseNo||'Butiran rekod',moduleTableTitle(module),content,buttons||`<button class="btn btn-secondary" data-action="close-dialog">Tutup</button>`);
}
async function confirmDelete(module,id){
  guard(module,'view');guard(module,'delete');const row=await db.get(module,id);if(!row)throw new Error('Rekod tidak ditemui.');
  if(!canDeleteFinanceRow(module,row))throw new Error('Transaksi kewangan yang telah dibayar, diterima atau mempunyai resit tidak boleh dipadam. Gunakan Batal atau refund.');
  const label=row.name||row.title||row.referenceNo||row.caseNo||row.receiptNo||'Rekod';
  const text=FINANCE_TABLES.includes(module)?'Rekod kewangan hanya boleh dipadam sebelum sebarang bayaran / terimaan atau resit wujud. Pembatalan dan refund dikekalkan untuk tujuan audit.':'Tindakan ini akan memadam rekod daripada pangkalan data setempat.';
  const body=`<div class="danger-callout">${escapeHtml(text)}</div><p class="hint">Rekod: <strong>${escapeHtml(label)}</strong></p><form id="delete-record-form"><div class="form-field"><label for="delete-password">Sahkan password akaun anda *</label><input id="delete-password" name="password" type="password" required autocomplete="current-password"></div></form>`;
  const dlg=openDialog('Padam rekod','Pemadaman memerlukan kebenaran Delete dan pengesahan password.',body,`<button class="btn btn-secondary" data-action="close-dialog">Kembali</button><button class="btn btn-danger" type="submit" form="delete-record-form">${icon('trash')} Padam rekod</button>`);
  $('#delete-record-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const password=new FormData(e.currentTarget).get('password');try{await serviceDelete(module,id,password);closeDialog();await renderApp();toast('Rekod dipadam','Pengguna dan tindakan direkodkan dalam Jejak audit.');}catch(err){toast('Tidak dapat memadam',err.message||'Sila cuba semula.','error');}});
}
async function previewEventAsMember(id){
  guard('events','view');
  if(currentUser.role==='Member')throw new Error('Pratonton ini hanya tersedia untuk pengguna bukan Ahli.');
  const ev=await db.get('events',id);
  if(!ev)throw new Error('Acara tidak ditemui.');
  if(!visibleRows('events',[ev]).length)throw new Error('Anda tidak mempunyai kebenaran untuk melihat acara ini.');
  const memberCanSee=['Published','Registration Open','Full','Completed'].includes(ev.status)&&(!ev.date||ev.date>=todayISO()||ev.status==='Completed');
  const registrations=Math.max(0,Number(ev.registrations)||0);
  const capacity=Number(ev.capacity)||0;
  const registrationOpen=memberCanSee&&['Published','Registration Open'].includes(ev.status)&&!(capacity&&registrations>=capacity);
  const dateValue=ev.date&&/^\d{4}-\d{2}-\d{2}$/.test(ev.date)?new Date(`${ev.date}T00:00:00`):null;
  const dateDay=dateValue&&!isNaN(dateValue)?String(dateValue.getDate()):'—';
  const dateMonth=dateValue&&!isNaN(dateValue)?dateValue.toLocaleDateString('ms-MY',{month:'short'}):'—';
  const fee=ev.fee!==undefined&&ev.fee!==null&&ev.fee!==''?formatMYR(ev.fee):'Tiada yuran dinyatakan';
  const participantLabel=capacity?`${registrations} / ${capacity} peserta`:`${registrations} peserta berdaftar`;
  const description=String(ev.description||'').trim();
  const descriptionHtml=description?`<section class="member-event-preview-description"><strong>Penerangan</strong><div>${escapeHtml(description).replace(/\r?\n/g,'<br>')}</div></section>`:'';
  const visibilityNote=memberCanSee
    ?`<div class="info-callout member-preview-note">${icon('eye','sm')} Ini ialah paparan baca sahaja seperti yang boleh dilihat oleh Ahli. Akaun dan peranan semasa tidak ditukar.</div>`
    :`<div class="member-preview-warning"><strong>Ahli tidak akan melihat acara ini.</strong><span>${escapeHtml(STATUS_LABELS[ev.status]||ev.status||'Status belum ditetapkan')}${ev.date&&ev.date<todayISO()&&ev.status!=='Completed'?' · Tarikh acara telah berlalu':''}. Paparan ini hanya menunjukkan bagaimana rekod akan kelihatan jika diterbitkan dan memenuhi syarat keterlihatan Ahli.</span></div>`;
  const registrationAction=registrationOpen
    ?`<div class="member-event-preview-footer"><button class="btn btn-primary" type="button" disabled aria-disabled="true">${icon('calendarCheck')} Daftar acara</button><small>Butang dinyahaktifkan dalam pratonton. Tiada pendaftaran akan dihantar atau disimpan.</small></div>`
    :`<div class="member-event-preview-footer"><span class="visibility-note">${memberCanSee?'Pendaftaran tidak tersedia untuk status acara ini.':'Pendaftaran tidak dipaparkan kepada Ahli.'}</span></div>`;
  const body=`${visibilityNote}<article class="member-event-preview"><header class="member-event-preview-head"><span class="event-date"><b>${escapeHtml(dateDay)}</b><small>${escapeHtml(dateMonth)}</small></span><div class="member-event-preview-title"><div class="member-event-preview-status">${statusPill(ev.status)}</div><h3>${escapeHtml(ev.title||'Aktiviti komuniti')}</h3><p>${icon('calendar','sm')} ${escapeHtml(niceDate(ev.date))}${ev.time?` · ${escapeHtml(ev.time)}`:''}</p></div></header><div class="member-event-preview-facts"><div class="member-event-preview-fact"><small>Lokasi</small><strong>${escapeHtml(ev.location||'Belum ditetapkan')}</strong></div><div class="member-event-preview-fact"><small>Penganjur</small><strong>${escapeHtml(ev.organizer||'Komuniti')}</strong></div><div class="member-event-preview-fact"><small>Penyertaan</small><strong>${escapeHtml(participantLabel)}</strong></div><div class="member-event-preview-fact"><small>Yuran</small><strong>${escapeHtml(fee)}</strong></div></div>${descriptionHtml}${registrationAction}</article>`;
  openDialog('Pratonton sebagai Ahli',`${ev.title||'Acara'} · Paparan baca sahaja`,body,`<button class="btn btn-secondary" data-action="close-dialog">Tutup pratonton</button>`);
}
async function registerForEvent(id){
  guard('events','view');if(currentUser.role!=='Member'&&!can('events','view'))throw new Error('Akses tidak dibenarkan.');const ev=await db.get('events',id);if(!ev)throw new Error('Acara tidak ditemui.');if(!visibleRows('events',[ev]).length)throw new Error('Anda tidak mempunyai kebenaran untuk melihat acara ini.');if(!['Published','Registration Open'].includes(ev.status))throw new Error('Pendaftaran acara ini tidak dibuka.');
  const participants=await db.all('eventParticipants');if(participants.some(p=>p.eventId===id&&p.userId===currentUser.id))throw new Error('Anda telah berdaftar untuk acara ini.');if(ev.capacity&&Number(ev.registrations||0)>=Number(ev.capacity))throw new Error('Acara ini telah penuh.');
  await db.put('eventParticipants',{id:uid(),eventId:id,eventTitle:ev.title,userId:currentUser.id,userName:currentUser.name,status:'Registered',registeredAt:new Date().toISOString(),attendance:'Pending'});ev.registrations=Number(ev.registrations||0)+1;if(ev.capacity&&ev.registrations>=Number(ev.capacity))ev.status='Full';await db.put('events',ev);await writeAudit('Daftar acara','events',id,ev.title);await renderApp();toast('Pendaftaran berjaya',`Anda berdaftar untuk ${ev.title}.`);
}
async function showParticipants(eventId){
  guard('events','view');guard('events','edit');const ev=await db.get('events',eventId);const list=(await db.all('eventParticipants')).filter(p=>p.eventId===eventId);const users=await db.all('users');
  const body=list.length?`<div class="table-scroll"><table class="data-table" style="min-width:500px"><thead><tr><th>Nama</th><th>Tarikh daftar</th><th>Kehadiran</th><th></th></tr></thead><tbody>${list.map(p=>{const name=p.userName||users.find(u=>u.id===p.userId)?.name||'Ahli';return `<tr><td>${escapeHtml(name)}</td><td>${escapeHtml(shortDateTime(p.registeredAt))}</td><td>${statusPill(p.attendance==='Attended'?'Attended':p.attendance==='Not Attended'?'Not Attended':'Pending')}</td><td><button class="btn btn-secondary btn-small" data-action="attendance-toggle" data-id="${p.id}" data-attendance="${p.attendance==='Attended'?'Not Attended':'Attended'}">${p.attendance==='Attended'?'Tandakan tidak hadir':'Tandakan hadir'}</button></td></tr>`}).join('')}</tbody></table></div>`:`<div class="empty-state"><strong>Belum ada peserta</strong><p>Pendaftaran akan dipaparkan di sini.</p></div>`;
  const dlg=openDialog(`Peserta · ${ev?.title||'Acara'}`,`${list.length} pendaftaran`,body,`<button class="btn btn-secondary" data-action="close-dialog">Tutup</button><button class="btn btn-primary" data-action="export-event-participants" data-id="${eventId}">${icon('download')} Eksport peserta</button>`);
}
async function markAnnouncementRead(id){
  if(!can('announcements','view'))throw new Error('Akses tidak dibenarkan.');const row=await db.get('announcements',id);if(!row||!visibleRows('announcements',[row]).length)throw new Error('Pengumuman tidak ditemui atau anda tidak mempunyai kebenaran.');row.readBy=[...(row.readBy||[]).filter(x=>x!==currentUser.id),currentUser.id];await db.put('announcements',row);await writeAudit('Baca pengumuman','announcements',id,row.title);await renderApp();toast('Ditandakan dibaca',row.title||'Pengumuman');
}
async function showNotifications(){
  const a=can('announcements','view')?visibleRows('announcements',await db.all('announcements')).filter(x=>isAnnouncementVisibleNow(x)&&!(x.readBy||[]).includes(currentUser.id)).slice(0,8):[];const n=(await db.all('notifications')).filter(x=>x.userId===currentUser.id||!x.userId).slice(0,8);
  const body=[...n.map(x=>`<div class="activity-item"><span class="activity-dot">${icon('bell','sm')}</span><span><strong>${escapeHtml(x.title||'Pemberitahuan')}</strong><small>${escapeHtml(x.message||'')} · ${escapeHtml(shortDateTime(x.createdAt))}</small></span></div>`),...a.map(x=>`<div class="activity-item"><span class="activity-dot">${icon('megaphone','sm')}</span><span><strong>${escapeHtml(x.title)}</strong><small>Pengumuman belum dibaca · ${niceDate(x.publishDate)}</small></span><button class="btn btn-secondary btn-small" data-action="notification-read" data-id="${x.id}">Buka</button></div>`)].join('');
  openDialog('Notifikasi',`${a.length+n.length} notifikasi belum dibaca / terkini`,body||`<div class="empty-state"><span class="empty-illustration">${icon('bell','xl')}</span><strong>Tiada notifikasi baharu</strong><p>Kami akan paparkan makluman komuniti di sini.</p></div>`,`<button class="btn btn-secondary" data-action="close-dialog">Tutup</button>`);
}
function officialReceiptModel(module,row,kind='receipt'){
  if(!FINANCE_TABLES.includes(module))throw new Error('Jenis resit tidak sah.');
  const isRefund=kind==='refund';if(isRefund&&!['payments','receivedPayments'].includes(module))throw new Error('Resit refund tidak tersedia untuk modul ini.');
  const storedNumber=isRefund?row.refundReceiptNo:row.receiptNo;const official=Boolean(storedNumber&&financeStatusApprovedBy(row));
  const receiptNumber=official?storedNumber:`DRAF-${row.referenceNo||row.id||'TRANSAKSI'}${isRefund?'-REFUND':''}`;
  const refundPending=isRefund&&(row.requestedRefundAmount!==undefined||row.requestedStatus==='Refunded')&&!row.refundReceiptNo;
  const status=refundPending?'Menunggu kelulusan refund':(row.requestedStatus&&row.approvalStatus==='Pending Approval'?`Menunggu kelulusan: ${STATUS_LABELS[row.requestedStatus]||row.requestedStatus}`:(STATUS_LABELS[row.status]||row.status||'Draf'));
  const amount=isRefund?Number(row.refundReceiptNo?row.refundAmount:(row.requestedRefundAmount??row.refundAmount)||0):module==='income'||module==='expenses'?Number(row.amount||0):module==='payments'?paidAmount(row):receivedAmount(row);
  if(!(Number(row.amount)>0)||isRefund&&!(amount>0))throw new Error('Amaun resit tidak sah.');
  const partyLabel=module==='income'||module==='receivedPayments'?'Diterima daripada':'Dibayar kepada';
  const party=module==='income'?row.source:module==='expenses'?row.vendor:row.payer;
  let title='RESIT RASMI',entries=[];
  if(isRefund){title='RESIT PEMULANGAN WANG / REFUND';entries=[[partyLabel,party||'—'],['No. resit asal',row.receiptNo||'—'],['Amaun dipulangkan',formatMYR(amount)],['Tarikh refund',niceDate(row.refundDate||row.date)],['Kaedah asal',row.method||'—'],['No. rujukan transaksi',row.reference||row.referenceNo||'—'],['Status',status],['Diluluskan oleh',row.approvedBy||'Menunggu pengesahan']];}
  else if(module==='income'){title='RESIT PENDAPATAN / TERIMAAN';entries=[['Diterima daripada',party||'—'],['Kategori',row.category||'—'],['Tarikh',niceDate(row.date)],['Jumlah pendapatan',formatMYR(amount)],['Kaedah bayaran',row.method||'—'],['No. rujukan transaksi',row.reference||row.referenceNo||'—'],['Status',status],['Disahkan oleh',row.approvedBy||'Menunggu pengesahan']];}
  else if(module==='expenses'){title='RESIT PEMBAYARAN KELUAR';entries=[['Dibayar kepada',party||'—'],['Kategori',row.category||'—'],['Tarikh',niceDate(row.date)],['No. bil / rujukan',row.billNo||'—'],['Jumlah dibayar / perbelanjaan',formatMYR(amount)],['Kaedah bayaran',row.method||'—'],['No. rujukan transaksi',row.reference||row.referenceNo||'—'],['Status',status],['Disahkan oleh',row.approvedBy||'Menunggu pengesahan']];}
  else if(module==='payments'){title='RESIT PEMBAYARAN KELUAR';entries=[['Dibayar kepada',party||'—'],['Kategori',row.category||'—'],['Tarikh',niceDate(row.date)],['No. bil / rujukan',row.billNo||'—'],['Jumlah bil',formatMYR(row.amount)],['Jumlah dibayar',formatMYR(amount)],['Kaedah pembayaran',row.method||'—'],['Akaun / bank',row.accountBank||'—'],['No. rujukan transaksi',row.reference||'—'],['Status',status],['Diluluskan oleh',row.approvedBy||'Menunggu pengesahan']];}
  else{title='RESIT RASMI / TERIMAAN';entries=[['Diterima daripada',party||'—'],['Tujuan',row.purpose||'—'],['Tarikh',niceDate(row.date)],['No. bil / rujukan',row.billNo||'—'],['Jumlah keseluruhan',formatMYR(row.amount)],['Jumlah diterima',formatMYR(amount)],['Kaedah pembayaran',row.method||'—'],['Akaun / bank',row.accountBank||'—'],['No. rujukan transaksi',row.reference||'—'],['Status',status],['Disahkan oleh',row.approvedBy||'Menunggu pengesahan']];}
  return {module,row,kind,isRefund,official,receiptNumber,amount,title,entries,party,status};
}
function receiptMarkup(model){
  const logoSrc=communityLogoSrc();const communityName=community.name||'Komuniti';const draftStatus=model.row.status==='Cancelled'?'DRAF — TRANSAKSI DIBATALKAN':`DRAF — ${model.status.toUpperCase()} · BUKAN RESIT RASMI`;
  return `<div class="receipt-preview-wrap">${model.official?'':`<div class="receipt-draft-banner">${escapeHtml(draftStatus)}</div>`}<article class="receipt-print"><header><img src="${escapeHtml(logoSrc)}" alt="Logo ${escapeHtml(communityName)}"><div><h1>${escapeHtml(communityName)}</h1><p>${escapeHtml(community.address||'')}${community.phone?` · ${escapeHtml(community.phone)}`:''}</p></div></header><hr><h2>${escapeHtml(model.title)}</h2><div class="receipt-number">${escapeHtml(model.receiptNumber)}</div><dl>${model.entries.map(([a,b])=>`<div><dt>${escapeHtml(a)}</dt><dd>${escapeHtml(b??'—')}</dd></div>`).join('')}</dl><p class="receipt-thanks">${model.isRefund?'Pemulangan wang direkodkan secara rasmi.':model.module==='expenses'||model.module==='payments'?'Rekod pembayaran keluar komuniti.':'Terima kasih atas bayaran / sumbangan anda.'}</p><footer>${escapeHtml(communityName)} · UNIKI V.1</footer></article></div>`;
}
async function viewReceipt(id,module,kind='receipt'){
  if(!FINANCE_TABLES.includes(module))throw new Error('Jenis resit tidak sah.');guard(module,'view');const row=await db.get(module,id);if(!row||!visibleRows(module,[row]).length)throw new Error('Resit tidak ditemui atau anda tiada kebenaran.');
  const model=officialReceiptModel(module,row,kind);await writeAudit(model.official?'Paparkan resit rasmi':'Paparkan pratonton resit',module,id,model.receiptNumber,`Amaun: ${formatMYR(model.amount)} · ${model.title}`);
  const attachment=row.fileData&&can(module,'view')?`<button class="btn btn-secondary" data-action="download-file" data-module="${module}" data-id="${escapeHtml(id)}">${icon('download')} Lampiran</button>`:'';
  const footer=`<button class="btn btn-secondary" data-action="close-dialog">Tutup</button>${attachment}<button class="btn btn-primary" data-action="print-receipt" data-module="${module}" data-id="${escapeHtml(id)}" data-receipt-kind="${kind}">${icon('print')} ${model.official?'Cetak resit':'Cetak pratonton'}</button>`;
  openDialog(model.official?'Paparkan resit rasmi':'Pratonton resit · belum disahkan',`${moduleTableTitle(module)} · ${model.receiptNumber}`,receiptMarkup(model),footer);
}
async function printReceipt(id,module='receivedPayments',kind='receipt'){
  if(!FINANCE_TABLES.includes(module))throw new Error('Jenis resit tidak sah.');guard(module,'view');const row=await db.get(module,id);if(!row||!visibleRows(module,[row]).length)throw new Error('Resit tidak ditemui atau anda tiada kebenaran.');
  const model=officialReceiptModel(module,row,kind);const printRoot=document.createElement('div');printRoot.id='print-root';printRoot.innerHTML=receiptMarkup(model);document.body.appendChild(printRoot);const logoImage=printRoot.querySelector('header img');
  if(logoImage&&!logoImage.complete)await new Promise(resolve=>{logoImage.onload=resolve;logoImage.onerror=resolve;});
  if(logoImage&&logoImage.naturalWidth===0&&communityLogoSrc()!=='assets/uniki-logo.png'){logoImage.src='assets/uniki-logo.png';try{await logoImage.decode();}catch{}}
  const action=model.official?(model.isRefund?'Cetak resit refund':'Cetak resit rasmi'):'Cetak pratonton resit';await writeAudit(action,module,id,model.receiptNumber,`Amaun: ${formatMYR(model.amount)} · ${model.title}`);
  document.body.classList.add('printing');window.print();setTimeout(()=>{document.body.classList.remove('printing');printRoot.remove();},800);
}
async function downloadRecordFile(module,id){guard(module,'view');const row=await db.get(module,id);if(!row||!visibleRows(module,[row]).length)throw new Error('Anda tidak mempunyai kebenaran untuk fail ini.');if(!row?.fileData)throw new Error('Lampiran tiada.');const a=document.createElement('a');a.href=row.fileData;a.download=row.fileName||'uniki-attachment';document.body.appendChild(a);a.click();a.remove();await writeAudit('Muat turun lampiran',module,id,row.fileName||'Fail');}
async function exportCurrentReport(){
  if(!can('reports','view'))throw new Error('Anda tidak mempunyai kebenaran mengeksport laporan.');
  const table=['members','events','incidents','complaints','volunteers','income','expenses','payments','receivedPayments'].includes(reportFilter)?reportFilter:null;
  if(table&&!can(table,'view'))throw new Error('Anda tidak mempunyai permission untuk laporan modul ini.');
  let rows=[];let name=reportFilter;
  if(table){rows=visibleRows(table,await db.all(table));if(table==='incidents')rows=rows.filter(r=>!['Resolved','Closed','Selesai','Ditutup'].includes(r.status));if(table==='complaints')rows=rows.filter(r=>!['Resolved','Closed','Selesai','Ditutup'].includes(r.status));if(table==='payments')rows=rows.filter(r=>['Pending Payment','Pending','Paid','Partial','Unpaid','Overdue','Cancelled','Refunded','Pending Approval'].includes(r.status));if(table==='events')rows=rows.filter(r=>!['Draft','Cancelled'].includes(r.status));rows=rows.filter(r=>(!reportFrom||(r.date||r.reportedAt||r.submitted||r.joined||'')>=reportFrom)&&(!reportTo||(r.date||r.reportedAt||r.submitted||r.joined||'')<=reportTo));}
  else{
    const inRange=r=>(!reportFrom||(r.date||'')>=reportFrom)&&(!reportTo||(r.date||'')<=reportTo);
    const inc=(can('income','view')?await db.all('income'):[]).filter(r=>inRange(r)&&['Posted','Approved'].includes(r.status)).reduce((s,r)=>s+Number(r.amount||0),0);
    const exp=(can('expenses','view')?await db.all('expenses'):[]).filter(r=>inRange(r)&&['Posted','Approved'].includes(r.status)).reduce((s,r)=>s+Number(r.amount||0),0);
    const rec=(can('receivedPayments','view')?await db.all('receivedPayments'):[]).filter(r=>inRange(r)&&['Verified','Received','Approved','Partially Received','Fully Received','Refunded'].includes(r.status)).reduce((s,r)=>s+netReceivedAmount(r),0);
    const pay=(can('payments','view')?await db.all('payments'):[]).filter(r=>inRange(r)&&['Paid','Verified','Disahkan','Partial','Refunded'].includes(r.status)).reduce((s,r)=>s+netPaidAmount(r),0);
    rows=[{Metrik:'Pendapatan diluluskan',Jumlah_RM:inc},{Metrik:'Terima bayaran disahkan',Jumlah_RM:rec},{Metrik:'Perbelanjaan diluluskan',Jumlah_RM:exp},{Metrik:'Bayaran keluar disahkan',Jumlah_RM:pay},{Metrik:'Baki semasa',Jumlah_RM:inc+rec-exp-pay}];
  }
  if(!rows.length){toast('Tiada data untuk eksport','Tiada rekod sepadan dengan penapis laporan.','warning');return;}
  const keys=[...new Set(rows.flatMap(r=>Object.keys(r)))].filter(k=>!['fileData','passHash','passSalt','recoveryHash','recoverySalt','table'].includes(k));const csv=[keys.map(csvCell).join(','),...rows.map(r=>keys.map(k=>csvCell(typeof r[k]==='object'&&r[k]!==null?JSON.stringify(r[k]):r[k])).join(','))].join('\r\n');downloadBlob('\ufeff'+csv,`uniki-report-${name}-${todayISO()}.csv`,'text/csv;charset=utf-8');await writeAudit('Eksport laporan','reports','',`${rows.length} rekod`);toast('Laporan dieksport',`${rows.length} baris CSV.`);
}
async function exportModule(module){
  if(module!=='audit'&&!can(module,'view'))throw new Error('Anda tidak mempunyai kebenaran untuk eksport data ini.');if(module==='audit'&&!can('audit','view'))throw new Error('Akses tidak dibenarkan.');
  let rows=module==='audit'?await db.all('audit'):visibleRows(module,await db.all(module));if(module==='receipts')rows=visibleRows('receivedPayments',await db.all('receivedPayments')).filter(r=>r.receiptNo);
  if(!rows.length){toast('Tiada data untuk eksport','Tambah atau cari data sebelum mengeksport.','warning');return;}
  const keys=[...new Set(rows.flatMap(r=>Object.keys(r)))].filter(k=>!['fileData','passHash','passSalt','recoveryHash','recoverySalt','table'].includes(k));const csv=[keys.map(csvCell).join(','),...rows.map(r=>keys.map(k=>csvCell(typeof r[k]==='object'&&r[k]!==null?JSON.stringify(r[k]):r[k])).join(','))].join('\r\n');downloadBlob('\ufeff'+csv,`uniki-${module}-${todayISO()}.csv`,'text/csv;charset=utf-8');await writeAudit('Eksport CSV',module,'',`${rows.length} rekod`);toast('Eksport selesai',`${rows.length} rekod CSV dimuat turun.`);
}
function csvCell(value){let text=String(value??'');if(typeof value!=='number'&&/^[\s]*[=+@\-]/.test(text))text="'"+text;return `"${text.replace(/"/g,'""')}"`;}
function downloadBlob(content,name,type){const blob=new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}

async function openUserForm(id=null){
  if(!isOwner()&&currentUser.role!=='Administrator')throw new Error('Hanya Owner atau Administrator boleh mengurus pengguna.');const record=id?await db.get('users',id):{};if(id&&!record)throw new Error('Pengguna tidak ditemui.');if(record?.role==='Owner'&&!isOwner())throw new Error('Administrator tidak boleh mengubah akaun Owner.');
  const availableRoles=roles.filter(r=>r.name!=='Owner'||isOwner());
  const roleOptions=availableRoles.map(r=>`<option value="${escapeHtml(r.name)}" ${record.role===r.name?'selected':''}>${escapeHtml(r.name)}</option>`).join('');
  const body=`<form id="user-form"><div class="form-grid"><div class="form-field"><label for="user-name">Nama penuh *</label><input id="user-name" name="name" required value="${escapeHtml(record.name||'')}"></div><div class="form-field"><label for="user-email">Email *</label><input id="user-email" name="email" type="email" required value="${escapeHtml(record.email||'')}"></div><div class="form-field"><label for="user-username">Username *</label><input id="user-username" name="username" required minlength="3" value="${escapeHtml(record.username||'')}"></div><div class="form-field"><label for="user-phone">No. telefon</label><input id="user-phone" name="phone" value="${escapeHtml(record.phone||'')}"></div><div class="form-field"><label for="user-role">Peranan *</label><select id="user-role" name="role" required>${roleOptions}</select></div>${!id?`<div class="form-field"><label for="user-recovery">Kunci pemulihan sementara *</label><input id="user-recovery" name="recovery" type="password" minlength="6" required><small class="hint">Berikan kunci ini dengan selamat kepada pengguna untuk pemulihan password local.</small></div>`:''}<div class="form-field"><label for="user-password">${id?'Password baharu (opsyenal)':'Password sementara *'}</label><input id="user-password" name="password" type="password" minlength="8" ${id?'':'required'} autocomplete="new-password"></div>${!id?`<div class="form-field"><label for="user-password2">Sahkan password *</label><input id="user-password2" name="password2" type="password" minlength="8" required autocomplete="new-password"></div>`:''}</div></form>`;
  const dlg=openDialog(`${id?'Edit':'Tambah'} pengguna`,id?'Kemaskini maklumat dan kebenaran pengguna.':'Akaun baharu hanya boleh digunakan pada profil pelayar ini.',body,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-primary" type="submit" form="user-form">${icon('check')} Simpan pengguna</button>`);
  $('#user-form',dlg).addEventListener('submit',async e=>{e.preventDefault();try{guard('users',id?'edit':'add');const fd=new FormData(e.currentTarget);const name=String(fd.get('name')).trim(),email=String(fd.get('email')).trim().toLowerCase(),username=String(fd.get('username')).trim().toLowerCase(),phone=String(fd.get('phone')||'').trim(),role=String(fd.get('role'));
    if(!validPhone(phone)||!validEmail(email))throw new Error('Format email atau telefon tidak sah.');const all=await db.all('users');if(all.some(u=>u.id!==id&&(u.email.toLowerCase()===email||u.username.toLowerCase()===username)))throw new Error('Email atau username telah digunakan.');if(!roles.some(r=>r.name===role))throw new Error('Peranan tidak sah.');if(role==='Owner'&&!isOwner())throw new Error('Hanya Owner boleh memberikan peranan Owner.');
    const saved={...record,id:record.id||uid(),name,email,username,phone,role};if(!id){const pass=String(fd.get('password')||''),confirm=String(fd.get('password2')||''),rec=String(fd.get('recovery')||'');if(pass!==confirm)throw new Error('Password tidak sepadan.');if(pass.length<8||rec.length<6)throw new Error('Password atau kunci pemulihan terlalu pendek.');const ph=await hashPassword(pass),rh=await hashPassword(rec);saved.passSalt=ph.salt;saved.passHash=ph.hash;saved.recoverySalt=rh.salt;saved.recoveryHash=rh.hash;saved.createdAt=new Date().toISOString();}else{const pass=String(fd.get('password')||'');if(pass){const ph=await hashPassword(pass);saved.passSalt=ph.salt;saved.passHash=ph.hash;}}
    await maybeAutoSnapshot();const stored=await db.put('users',saved);await writeAudit(id?'Edit pengguna':'Tambah pengguna','users',stored.id,stored.name);closeDialog();await renderApp();toast('Pengguna disimpan',`${name} · ${role}`);
  }catch(err){toast('Tidak dapat menyimpan pengguna',err.message,'error');}});
}
async function confirmDeleteUser(id){
  if(!isOwner()&&currentUser.role!=='Administrator')throw new Error('Akses tidak dibenarkan.');const target=await db.get('users',id);if(!target)throw new Error('Pengguna tidak ditemui.');if(target.role==='Owner'&&!isOwner())throw new Error('Administrator tidak boleh memadam akaun Owner.');if(target.id===currentUser.id)throw new Error('Anda tidak boleh memadam akaun yang sedang digunakan.');const all=await db.all('users');if(target.role==='Owner'&&all.filter(u=>u.role==='Owner').length<=1)throw new Error('Owner terakhir tidak boleh dipadam.');
  const dlg=openDialog('Padam pengguna','Pengesahan password diperlukan.',`<div class="danger-callout">Akaun <strong>${escapeHtml(target.name)}</strong> akan dipadam daripada peranti ini.</div><form id="delete-user-form"><div class="form-field"><label>Password anda *</label><input name="password" type="password" required></div></form>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-danger" type="submit" form="delete-user-form">${icon('trash')} Padam akaun</button>`);
  $('#delete-user-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const pwd=new FormData(e.currentTarget).get('password');if(!(await verifyHash(pwd,currentUser.passSalt,currentUser.passHash))){toast('Pengesahan gagal','Password tidak betul.','error');return;}await maybeAutoSnapshot();await db.remove('users',id);await writeAudit('Padam pengguna','users',id,target.name);closeDialog();await renderApp();toast('Pengguna dipadam',target.name);});
}
async function openRoleForm(id=null){
  if(!isOwner())throw new Error('Hanya Owner boleh mengubah role.');const role=id?roles.find(r=>r.id===id):null;if(id&&!role)throw new Error('Role tidak ditemui.');if(role?.name==='Owner')throw new Error('Peranan Owner dilindungi dan mempunyai akses penuh.');
  const matrix=`<div class="table-scroll" style="max-height:360px"><table class="data-table" style="min-width:650px"><thead><tr><th>Modul</th>${ACTIONS.map(a=>`<th>${ACTION_LABELS[a]}</th>`).join('')}</tr></thead><tbody>${PERMISSION_MODULES.map(m=>`<tr><td>${escapeHtml(MODULE_LABELS[m]||m)}</td>${ACTIONS.map(a=>`<td><input aria-label="${escapeHtml(MODULE_LABELS[m]||m)} ${ACTION_LABELS[a]}" type="checkbox" name="perm__${m}__${a}" ${(role?.permissions?.[m]||[]).includes(a)?'checked':''}></td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const body=`<form id="role-form"><div class="form-grid"><div class="form-field"><label for="role-name">Nama peranan *</label><input id="role-name" name="name" required value="${escapeHtml(role?.name||'')}"></div><div class="form-field"><label for="role-desc">Penerangan</label><input id="role-desc" name="description" value="${escapeHtml(role?.description||'')}"></div><div class="span-2"><div class="section-heading"><h2>Kebenaran mengikut modul</h2><span class="visibility-note">Semak tindakan yang dibenarkan</span></div>${matrix}</div></div></form>`;
  const dlg=openDialog(`${id?'Edit':'Cipta'} peranan`,id?'Tetapan kebenaran berkuat kuasa serta-merta.':'Custom role baharu bermula tanpa akses.',body,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-primary" type="submit" form="role-form">${icon('check')} Simpan peranan</button>`);
  $('#role-form',dlg).addEventListener('submit',async e=>{e.preventDefault();try{const fd=new FormData(e.currentTarget);const name=String(fd.get('name')||'').trim();if(!name)throw new Error('Nama peranan wajib diisi.');if(roles.some(r=>r.id!==id&&r.name.toLowerCase()===name.toLowerCase()))throw new Error('Nama peranan telah digunakan.');if(role?.system&&name!==role.name)throw new Error('Nama role sistem tidak boleh diubah.');const permissions={};for(const m of PERMISSION_MODULES)permissions[m]=ACTIONS.filter(a=>fd.has(`perm__${m}__${a}`));const saved={id:role?.id||uid(),name,description:String(fd.get('description')||''),permissions,system:!!role?.system};await maybeAutoSnapshot();await db.put('roles',saved);if(role&&role.name!==saved.name){const assigned=await db.all('users');for(const u of assigned.filter(x=>x.role===role.name)){u.role=saved.name;await db.put('users',u);}}roles=await db.all('roles');await writeAudit(id?'Edit kebenaran':'Cipta peranan','roles',saved.id,saved.name);closeDialog();await renderApp();toast('Peranan disimpan',name);}catch(err){toast('Tidak dapat menyimpan peranan',err.message,'error');}});
}
async function deleteRole(id){
  if(!isOwner())throw new Error('Hanya Owner boleh memadam peranan.');const role=roles.find(r=>r.id===id);if(!role||role.system)throw new Error('Peranan sistem tidak boleh dipadam.');const users=await db.all('users');if(users.some(u=>u.role===role.name))throw new Error('Tukar peranan pengguna yang menggunakan role ini dahulu.');openDialog('Padam peranan',`Sahkan pemadaman “${role.name}”.`,`<div class="danger-callout">Peranan ini akan dipadam. Pastikan ia tidak sedang digunakan oleh akaun pengguna.</div>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-danger" data-action="delete-role-confirm" data-id="${id}">${icon('trash')} Padam peranan</button>`);
}
async function confirmDeleteRole(id){if(!isOwner())throw new Error('Akses ditolak.');const role=roles.find(r=>r.id===id);if(!role||role.system)throw new Error('Peranan sistem tidak boleh dipadam.');const users=await db.all('users');if(users.some(u=>u.role===role.name))throw new Error('Peranan sedang digunakan oleh pengguna.');await maybeAutoSnapshot();await db.remove('roles',id);roles=await db.all('roles');await writeAudit('Padam peranan','roles',id,role.name);closeDialog();await renderApp();toast('Peranan dipadam',role.name);}
async function openPasswordForm(){
  const dlg=openDialog('Ubah password','Sahkan dengan password semasa.',`<form id="password-form"><div class="form-stack"><div class="form-field"><label>Password semasa *</label><input type="password" name="current" required></div><div class="form-field"><label>Password baharu *</label><input type="password" name="password" minlength="8" required></div><div class="form-field"><label>Sahkan password baharu *</label><input type="password" name="confirm" minlength="8" required></div></div></form>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-primary" type="submit" form="password-form">Kemas kini</button>`);
  $('#password-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const cur=String(fd.get('current')),pass=String(fd.get('password')),confirm=String(fd.get('confirm'));if(!(await verifyHash(cur,currentUser.passSalt,currentUser.passHash))){toast('Pengesahan gagal','Password semasa tidak betul.','error');return;}if(pass.length<8||pass!==confirm){toast('Password tidak sah','Pastikan sekurang-kurangnya 8 aksara dan sepadan.','error');return;}const h=await hashPassword(pass);currentUser.passSalt=h.salt;currentUser.passHash=h.hash;await db.put('users',currentUser);await writeAudit('Ubah password','System',currentUser.id,currentUser.name);closeDialog();toast('Password dikemas kini','Gunakan password baharu pada log masuk seterusnya.');});
}
async function openCommunityForm(){
  if(!can('settings','edit'))throw new Error('Anda tidak mempunyai kebenaran untuk mengubah komuniti.');
  const c=community||{};const existingLogo=communityLogoSrc(c.logoData);
  const body=`<form id="community-form"><div class="form-grid"><div class="form-field span-2"><label>Nama komuniti *</label><input name="name" required maxlength="100" value="${escapeHtml(c.name||'')}"></div><div class="form-field"><label>Email</label><input name="email" type="email" value="${escapeHtml(c.email||'')}"></div><div class="form-field"><label>No. telefon</label><input name="phone" value="${escapeHtml(c.phone||'')}"></div><div class="form-field"><label>Website</label><input name="website" type="url" value="${escapeHtml(c.website||'')}"></div><div class="form-field"><label>Kawasan</label><input name="area" value="${escapeHtml(c.area||'')}"></div><div class="form-field span-2"><label>Logo komuniti untuk cetakan resit</label><div class="community-logo-editor"><div class="community-logo-preview"><img id="community-logo-preview" src="${escapeHtml(existingLogo)}" alt="Pratonton logo pada resit"></div><div class="community-logo-controls"><label class="btn btn-secondary btn-small community-logo-upload">${icon('upload','sm')} Muat naik / tukar logo<input id="community-logo-file" type="file" name="logoFile" accept="image/png,image/jpeg,image/webp" aria-label="Pilih fail logo komuniti"></label><span id="community-logo-filename" class="hint">${c.logoData?escapeHtml(c.logoFileName||'Logo komuniti sedia ada'):'Logo UNIKI lalai digunakan.'}</span>${c.logoData?`<label class="checkline community-logo-remove"><input id="community-remove-logo" name="removeLogo" type="checkbox"> Buang logo khusus dan guna logo UNIKI</label>`:''}<small class="hint">PNG, JPG atau WebP · maksimum 3 MB. Disimpan setempat pada peranti ini.</small></div></div></div><div class="form-field span-2"><label>Alamat</label><textarea name="address">${escapeHtml(c.address||'')}</textarea></div><div class="form-field span-2"><label>Penerangan</label><textarea name="description">${escapeHtml(c.description||'')}</textarea></div><div class="form-field span-2"><label>Media sosial / waktu operasi</label><input name="socialHours" value="${escapeHtml(c.socialHours||'')}"></div></div></form>`;
  const dlg=openDialog('Maklumat komuniti','Logo ini disimpan setempat dan akan dipaparkan pada resit apabila dicetak.',body,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-primary" type="submit" form="community-form">${icon('check')} Simpan</button>`);
  const logoInput=$('#community-logo-file',dlg);const logoPreview=$('#community-logo-preview',dlg);const logoName=$('#community-logo-filename',dlg);const removeLogo=$('#community-remove-logo',dlg);let previewUrl='';
  const clearPreviewUrl=()=>{if(previewUrl){URL.revokeObjectURL(previewUrl);previewUrl='';}};
  const resetLogoPreview=()=>{clearPreviewUrl();logoPreview.src=existingLogo;logoName.textContent=c.logoData?(c.logoFileName||'Logo komuniti sedia ada'):'Logo UNIKI lalai digunakan.';};
  logoInput.addEventListener('change',()=>{const file=logoInput.files?.[0];if(!file)return;const allowed=['image/png','image/jpeg','image/webp'];if(!allowed.includes(String(file.type||'').toLowerCase())){logoInput.value='';resetLogoPreview();toast('Format logo tidak disokong','Pilih PNG, JPG atau WebP.','error');return;}if(!file.size||file.size>3*1024*1024){logoInput.value='';resetLogoPreview();toast('Saiz logo tidak sah','Pilih logo yang bersaiz antara 1 bait hingga 3 MB.','error');return;}if(removeLogo)removeLogo.checked=false;clearPreviewUrl();previewUrl=URL.createObjectURL(file);logoPreview.src=previewUrl;logoName.textContent=file.name;});
  removeLogo?.addEventListener('change',()=>{if(removeLogo.checked){logoInput.value='';clearPreviewUrl();logoPreview.src='assets/uniki-logo.png';logoName.textContent='Logo khusus akan dibuang';}else{logoPreview.src=existingLogo;logoName.textContent=c.logoFileName||'Logo komuniti sedia ada';}});
  dlg.addEventListener('close',clearPreviewUrl,{once:true});
  $('#community-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const submit=$('button[form="community-form"]',dlg);if(submit)submit.disabled=true;try{const fd=new FormData(e.currentTarget);const saved={...c,id:'primary',name:String(fd.get('name')).trim(),email:String(fd.get('email')||'').trim(),phone:String(fd.get('phone')||'').trim(),website:String(fd.get('website')||'').trim(),area:String(fd.get('area')||'').trim(),address:String(fd.get('address')||'').trim(),description:String(fd.get('description')||'').trim(),socialHours:String(fd.get('socialHours')||'').trim()};if(!validPhone(saved.phone))throw new Error('Format telefon tidak sah.');let logoData=c.logoData||'';let logoFileName=c.logoFileName||'';if(removeLogo?.checked){logoData='';logoFileName='';}const file=logoInput.files?.[0];if(file?.size){logoData=await readCommunityLogo(file);logoFileName=file.name;}if(logoData){saved.logoData=logoData;saved.logoFileName=logoFileName;}else{delete saved.logoData;delete saved.logoFileName;}await db.put('communities',saved);community=saved;await writeAudit('Edit komuniti','settings','primary',saved.name);closeDialog();await renderApp();toast('Maklumat komuniti dikemas kini',saved.name);}catch(err){if(submit)submit.disabled=false;toast('Tidak dapat menyimpan',err.message,'error');}});
}

async function startFactoryReset(){
  if(!isOwner())throw new Error('Hanya Owner boleh melakukan reset aplikasi.');
  const dlg=openDialog('Factory reset aplikasi','Langkah 1 daripada 2 · pengesahan keselamatan',`<div class="danger-callout"><strong>Amaran:</strong> Factory reset akan memadam akaun, ahli, kewangan, dokumen, audit log dan semua tetapan dalam profil pelayar ini. Operasi ini tidak boleh dibuat asal.</div><form id="reset-form"><div class="form-stack"><div class="form-field"><label>Taip <strong>RESET UNIKI</strong> untuk pengesahan *</label><input name="phrase" required autocomplete="off"></div><div class="form-field"><label>Password Owner *</label><input name="password" type="password" required autocomplete="current-password"></div></div></form>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-danger" type="submit" form="reset-form">Teruskan</button>`);
  $('#reset-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const fd=new FormData(e.currentTarget);if(String(fd.get('phrase')).trim()!=='RESET UNIKI'){toast('Kod keselamatan tidak sepadan','Taip RESET UNIKI dengan tepat.','error');return;}if(!(await verifyHash(String(fd.get('password')),currentUser.passSalt,currentUser.passHash))){toast('Password tidak betul','Reset dibatalkan.','error');return;}closeDialog();openDialog('Pengesahan akhir','Langkah 2 daripada 2 · pemadaman kekal',`<div class="danger-callout">Anda benar-benar mahu memadam <strong>semua data UNIKI</strong> daripada peranti ini? Buat backup terlebih dahulu jika data masih diperlukan.</div><p class="hint">Tindakan ini akan mengembalikan aplikasi kepada state persediaan kali pertama.</p>`,`<button class="btn btn-secondary" data-action="close-dialog">Tidak, kembali</button><button class="btn btn-danger" data-action="factory-reset-final">${icon('trash')} Ya, reset semua data</button>`);});
}
async function performFactoryReset(verified=false){
  if(!isOwner())throw new Error('Hanya Owner boleh reset aplikasi.');if(!verified)throw new Error('Reset memerlukan kod keselamatan, password dan pengesahan kedua.');try{await db.saveSnapshot();}catch{}
  await writeAudit('Factory reset','settings','primary','Semua data aplikasi');await db.clearRecords();await new Promise((resolve,reject)=>{const tx=db.db.transaction('backups','readwrite');tx.objectStore('backups').clear();tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});
  sessionStorage.removeItem('uniki-user');localStorage.removeItem('uniki-user');currentUser=null;community={};roles=[];currentPage='dashboard';authMode='setup';closeDialog();await renderAuth();toast('Aplikasi telah direset','Cipta workspace baharu untuk bermula.','warning');
}
async function deriveBackupKey(password,salt,iterations=240000){const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);}
async function openBackupDialog(){
  if(!can('sync','add'))throw new Error('Anda tidak mempunyai kebenaran membuat backup.');
  const dlg=openDialog('Cipta backup tersulit','Simpan fail .uniki di tempat yang selamat. Kata laluan tidak boleh dipulihkan.',`<div class="info-callout">Backup merangkumi data workspace dan hash akaun. Semua kandungan fail dienkripsi sebelum dimuat turun menggunakan AES-GCM.</div><form id="backup-form"><div class="form-stack"><div class="form-field"><label>Kata laluan backup *</label><input name="password" type="password" required minlength="10" autocomplete="new-password"><small class="hint">Gunakan sekurang-kurangnya 10 aksara dan simpan berasingan daripada fail.</small></div><div class="form-field"><label>Sahkan kata laluan *</label><input name="confirm" type="password" required minlength="10" autocomplete="new-password"></div></div></form>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-primary" type="submit" form="backup-form">${icon('lock')} Enkripsi & muat turun</button>`);
  $('#backup-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const pass=String(fd.get('password')),confirm=String(fd.get('confirm'));if(pass.length<10||pass!==confirm){toast('Kata laluan tidak sah','Pastikan sama dan sekurang-kurangnya 10 aksara.','error');return;}try{const salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12)),iterations=240000,key=await deriveBackupKey(pass,salt,iterations);const records=await db.all();const payload={app:'UNIKI V.1',version:APP_VERSION,createdAt:new Date().toISOString(),records};const cipher=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,new TextEncoder().encode(JSON.stringify(payload)));const file={format:'UNIKI-ENCRYPTED-BACKUP',version:1,algorithm:'AES-256-GCM',kdf:'PBKDF2-SHA256',iterations,salt:bytesToBase64(salt),iv:bytesToBase64(iv),ciphertext:bytesToBase64(new Uint8Array(cipher))};downloadBlob(JSON.stringify(file),`UNIKI-backup-${todayISO()}.uniki.json`,'application/json');await writeAudit('Backup tersulit','sync','',`${records.length} rekod`);closeDialog();toast('Backup siap',`${records.length} rekod disulitkan dan dimuat turun.`);}catch(err){toast('Backup gagal',err.message||'Tidak dapat membuat backup.','error');}});
}
function openRestoreDialog(){
  if(!can('sync','edit'))throw new Error('Anda tidak mempunyai kebenaran restore backup.');
  const dlg=openDialog('Pulihkan backup','Semua data semasa akan diganti selepas pengesahan.',`<div class="danger-callout">Pastikan anda sudah menyimpan salinan workspace semasa. Restore menggantikan semua data dalam pangkalan data local ini.</div><form id="restore-form"><div class="form-stack"><div class="form-field"><label>Pilih fail backup .uniki.json *</label><input name="file" type="file" required accept=".json,.uniki"></div><div class="form-field"><label>Kata laluan backup *</label><input name="password" type="password" required autocomplete="current-password"></div><div class="form-field"><label>Taip RESTORE untuk pengesahan *</label><input name="phrase" required autocomplete="off"></div></div></form>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-danger" type="submit" form="restore-form">${icon('upload')} Dekripsi & pulihkan</button>`);
  $('#restore-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const fd=new FormData(e.currentTarget);if(String(fd.get('phrase')).trim()!=='RESTORE'){toast('Pengesahan tidak sepadan','Taip RESTORE dengan tepat.','error');return;}const file=fd.get('file');if(!file||!file.size){toast('Pilih fail backup','Fail backup belum dipilih.','error');return;}if(file.size>200*1024*1024){toast('Fail backup terlalu besar','Had restore browser edition ialah 200 MB.','error');return;}try{const envelope=JSON.parse(await file.text());if(envelope.format!=='UNIKI-ENCRYPTED-BACKUP'||!envelope.ciphertext)throw new Error('Fail ini bukan backup UNIKI yang sah.');const iterations=Number(envelope.iterations);if(!Number.isInteger(iterations)||iterations<100000||iterations>1000000)throw new Error('Parameter keselamatan backup tidak sah.');const key=await deriveBackupKey(String(fd.get('password')),base64ToBytes(envelope.salt),iterations);let clear;try{clear=await crypto.subtle.decrypt({name:'AES-GCM',iv:base64ToBytes(envelope.iv)},key,base64ToBytes(envelope.ciphertext));}catch{throw new Error('Kata laluan backup tidak betul atau fail rosak.');}const payload=JSON.parse(new TextDecoder().decode(clear));if(!Array.isArray(payload.records)||!payload.records.every(r=>r?.id&&r?.table))throw new Error('Struktur data backup tidak sah.');const records=payload.records;if(!records.some(r=>r.table==='users'))throw new Error('Backup tidak mengandungi akaun pengguna.');closeDialog();openDialog('Sahkan pemulihan',`${records.length} rekod akan menggantikan data semasa.`, `<div class="danger-callout">Pemulihan daripada: ${escapeHtml(payload.createdAt?shortDateTime(payload.createdAt):file.name)}<br>Anda akan log keluar jika akaun semasa tidak wujud dalam backup.</div>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-danger" data-action="restore-records-confirm">${icon('upload')} Gantikan data</button>`);window._pendingRestore=records;}catch(err){toast('Restore gagal',err.message||'Fail tidak dapat dipulihkan.','error');}});
}
async function finishRestore(records){
  if(!can('sync','edit'))throw new Error('Akses restore ditolak.');try{await db.saveSnapshot();}catch{}await db.replaceRecords(records);const userFound=await db.get('users',currentUser.id);closeDialog();if(userFound){currentUser=userFound;await loadWorkspace();await writeAudit('Restore backup','sync','',`${records.length} rekod`);await renderApp();toast('Backup dipulihkan',`${records.length} rekod dimuatkan.`);}else{sessionStorage.removeItem('uniki-user');localStorage.removeItem('uniki-user');currentUser=null;authMode='login';await renderAuth();toast('Backup dipulihkan','Log masuk dengan akaun dalam backup.');}
}
async function makeSnapshot(){if(!can('sync','add'))throw new Error('Akses backup ditolak.');const s=await db.saveSnapshot();await writeAudit('Snapshot local','sync',s.id,`${s.count} rekod`);await renderApp();toast('Snapshot disimpan',`${s.count} rekod dalam checkpoint local.`);}
async function restoreSnapshot(id){
  if(!can('sync','edit'))throw new Error('Akses restore ditolak.');const snapshots=await db.listSnapshots();const snapshot=snapshots.find(s=>s.id===id);if(!snapshot)throw new Error('Snapshot tidak ditemui.');const dlg=openDialog('Pulihkan snapshot?',`${snapshot.count} rekod · ${shortDateTime(snapshot.createdAt)}`,`<div class="danger-callout">Semua data semasa akan diganti dengan snapshot setempat ini.</div><label class="checkline"><input id="snapshot-confirm" type="checkbox"> Saya faham tindakan ini menggantikan data semasa.</label>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-danger" data-action="restore-snapshot-confirm" data-id="${id}">${icon('history')} Pulihkan snapshot</button>`);window._snapshotPending=snapshot;
}
async function finishSnapshotRestore(snapshot){if(!$('#snapshot-confirm')?.checked)throw new Error('Tandakan pengesahan sebelum restore.');try{await db.saveSnapshot();}catch{}await db.replaceRecords(snapshot.records);const found=await db.get('users',currentUser.id);closeDialog();if(found){currentUser=found;await loadWorkspace();await writeAudit('Restore snapshot','sync',snapshot.id,`${snapshot.count} rekod`);await renderApp();toast('Snapshot dipulihkan',`${snapshot.count} rekod dipulihkan.`);}else{currentUser=null;sessionStorage.removeItem('uniki-user');localStorage.removeItem('uniki-user');authMode='login';await renderAuth();}}
async function checkSyncReadiness(){
  if(!can('sync','view'))throw new Error('Akses sync ditolak.');const all=await db.all();const bad=all.filter(r=>!r.id||!r.table);await db.put('syncLog',{id:uid(),action:'Readiness check',records:all.length,invalid:bad.length,result:bad.length?'failed':'local-ready',createdAt:new Date().toISOString()});toast(bad.length?'Semakan menemui isu':'Pangkalan data local sihat',bad.length?`${bad.length} rekod tidak sah.`:`${all.length} rekod sah. Tiada peer service Wi-Fi dipasangkan; sync rangkaian tidak dijalankan.`,bad.length?'error':'warning');}
async function showQRRequirements(){openDialog('QR Connect','Aliran untuk edisi desktop / Android yang mempunyai Local Sync Companion.',`<div class="info-callout">QR sambungan sebenar perlu memuatkan alamat service sementara, token rawak sekali guna, expiry dan kunci awam peer — bukan password. Browser-only build ini tidak mengaktifkan listener Wi-Fi atau crypto handshake peer; sebab itu ia tidak menjana QR palsu.</div><ol class="hint"><li>Pasang companion service pada Windows / Android.</li><li>Pastikan rangkaian Wi-Fi sama dan sahkan fingerprint peranti.</li><li>Imbas QR ephemeral, kemudian semak bilangan rekod/conflict.</li><li>Sahkan sync dan simpan audit receipt.</li></ol>`,`<button class="btn btn-secondary" data-action="close-dialog">Faham</button>`);}
async function openIPConnect(){
  const dlg=openDialog('Connect by IP','Input ini hanya mengesahkan format. Ia tidak akan memulakan sambungan tanpa service penerima.',`<form id="ip-form"><div class="form-grid"><div class="form-field"><label>IP address / hostname *</label><input name="ip" required placeholder="192.168.1.20"></div><div class="form-field"><label>Port *</label><input name="port" type="number" required min="1" max="65535" placeholder="8443"></div></div><div class="info-callout" style="margin-top:13px">Untuk keselamatan, jangan masukkan maklumat sensitif. Browser edition ini belum mempunyai network listener encrypted untuk local Wi-Fi sync.</div></form>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-primary" type="submit" form="ip-form">${icon('wifi')} Semak sambungan</button>`);
  $('#ip-form',dlg).addEventListener('submit',async e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const ip=String(fd.get('ip')).trim();const port=Number(fd.get('port'));if(!/^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)(?:\.|$)){4}$/.test(ip)&&!/^([a-z0-9-]+\.)*[a-z0-9-]+$/i.test(ip)){toast('IP / hostname tidak sah','Semak alamat yang dimasukkan.','error');return;}if(!Number.isInteger(port)||port<1||port>65535){toast('Port tidak sah','Port mesti antara 1 hingga 65535.','error');return;}await writeAudit('IP connect readiness','sync','',`${ip}:${port}`);toast('Alamat sah · service tiada',`Format ${ip}:${port} sah, tetapi Local Sync Companion belum tersedia untuk menerima sambungan.`,'warning');});
}
async function installPWA(){if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;}else toast('Pemasangan PWA','Gunakan menu browser “Install app” atau “Add to Home Screen”.','warning');}

async function answerLocalAI(question){
  const q=String(question||'').toLowerCase();const month=todayISO().slice(0,7);const isThisMonth=/bulan ini|bulan semasa|month/.test(q);
  if(/ringkasan komuniti|community summary/.test(q)){
    const parts=[];if(can('members','view')){const a=await db.all('members');parts.push(`${a.length} ahli keseluruhan (${a.filter(x=>x.status==='Active').length} aktif)`);}if(can('events','view')){const a=visibleRows('events',await db.all('events'));parts.push(`${a.filter(x=>x.date>=todayISO()&&!['Cancelled','Completed','Draft'].includes(x.status)).length} acara akan datang`);}if(can('incidents','view')){const a=visibleRows('incidents',await db.all('incidents'));parts.push(`${a.filter(x=>!['Resolved','Closed'].includes(x.status)).length} kejadian terbuka`);}if(can('complaints','view')){const a=visibleRows('complaints',await db.all('complaints'));parts.push(`${a.filter(x=>!['Resolved','Closed'].includes(x.status)).length} aduan aktif`);}return parts.length?`Ringkasan komuniti: ${parts.join(' · ')}.`:'Anda tidak mempunyai permission untuk melihat data komuniti yang boleh diringkaskan.';
  }
  if(/ahli|members?/.test(q)){
    if(!can('members','view'))return 'Anda tidak mempunyai permission Members · View, jadi saya tidak boleh mendedahkan statistik ahli.';const rows=await db.all('members');const active=rows.filter(r=>r.status==='Active');if(/kategori|category/.test(q)){const buckets={};active.forEach(r=>buckets[r.category||'Tidak dikategori']=(buckets[r.category||'Tidak dikategori']||0)+1);return `Ahli aktif: ${active.length}. Mengikut kategori: ${Object.entries(buckets).map(([k,v])=>`${k} ${v}`).join(', ')||'belum ada kategori'}.`;}return `Terdapat ${rows.length} ahli keseluruhan; ${active.length} ahli berstatus aktif dan ${rows.length-active.length} tidak aktif.`;
  }
  if(/acara|events?/.test(q)){
    if(!can('events','view'))return 'Anda tidak mempunyai permission Events · View.';const rows=visibleRows('events',await db.all('events'));const selected=rows.filter(r=>isThisMonth?String(r.date||'').startsWith(month):r.date>=todayISO()&&!['Cancelled','Completed','Draft'].includes(r.status));return `${selected.length} acara ${isThisMonth?'dijadualkan bulan ini':'akan datang'}. ${selected.slice(0,6).map(r=>`\n• ${r.title} — ${niceDate(r.date)} (${STATUS_LABELS[r.status]||r.status})`).join('')||'\nBelum ada acara yang sepadan.'}`;
  }
  if(/kejadian|incident/.test(q)){
    if(!can('incidents','view'))return 'Anda tidak mempunyai permission Incidents · View.';const rows=visibleRows('incidents',await db.all('incidents')).filter(r=>!['Resolved','Closed'].includes(r.status));return rows.length?`${rows.length} laporan kejadian belum selesai:\n${rows.slice(0,8).map(r=>`• ${r.caseNo||''} ${r.title} — ${STATUS_LABELS[r.status]||r.status} (${r.location||'lokasi tiada'})`).join('\n')}`:'Tiada laporan kejadian terbuka.';
  }
  if(/aduan|complaint|maklum balas/.test(q)){
    if(!can('complaints','view'))return 'Anda tidak mempunyai permission Complaints · View.';const rows=visibleRows('complaints',await db.all('complaints')).filter(r=>!['Resolved','Closed'].includes(r.status));return rows.length?`${rows.length} aduan / maklum balas masih aktif:\n${rows.slice(0,8).map(r=>`• ${r.reference||''} ${r.title} — ${STATUS_LABELS[r.status]||r.status}`).join('\n')}`:'Tiada aduan aktif.';
  }
  if(/baki|balance|kewangan|financial summary|ringkasan kewangan|perbelanjaan|expense|pendapatan|income|terima bayaran|received payment|kutipan|pembayaran|bayaran|payment/.test(q)){
    const needed=['income','expenses','payments','receivedPayments'];if(!needed.every(t=>can(t,'view')))return 'Untuk ringkasan kewangan lengkap, peranan anda memerlukan View bagi Pendapatan, Perbelanjaan, Bayar dan Terima bayaran. Saya tidak akan mengira baki daripada data separa.';
    const inc=await db.all('income'),exp=await db.all('expenses'),pay=await db.all('payments'),rec=await db.all('receivedPayments');const filter=r=>!isThisMonth||String(r.date||'').startsWith(month);const income=inc.filter(r=>filter(r)&&['Approved','Posted'].includes(r.status)).reduce((s,r)=>s+Number(r.amount||0),0);const received=rec.filter(r=>filter(r)&&['Verified','Received','Approved','Partially Received','Fully Received','Refunded'].includes(r.status)).reduce((s,r)=>s+netReceivedAmount(r),0);const expenses=exp.filter(r=>filter(r)&&['Approved','Posted'].includes(r.status)).reduce((s,r)=>s+Number(r.amount||0),0);const paid=pay.filter(r=>filter(r)&&['Paid','Verified','Disahkan','Partial','Refunded'].includes(r.status)).reduce((s,r)=>s+netPaidAmount(r),0);const outstanding=pay.filter(r=>filter(r)&&['Pending Payment','Pending','Unpaid','Overdue','Partial'].includes(r.status)).reduce((s,r)=>s+Math.max(0,Number(r.amount||0)-paidAmount(r)),0);const label=isThisMonth?'bulan ini':'setakat ini';
    if(/perbelanjaan|expense/.test(q))return `Jumlah perbelanjaan yang diluluskan ${label}: ${formatMYR(expenses)}.`;
    if(/pendapatan|income/.test(q))return `Pendapatan dan kutipan yang diluluskan/disahkan ${label}: ${formatMYR(income+received)} (pendapatan ${formatMYR(income)} · terimaan ${formatMYR(received)}).`;
    if(/terima bayaran|received payment|kutipan/.test(q))return `Terima bayaran yang telah disahkan ${label}: ${formatMYR(received)}.`;
    if(/pembayaran|bayaran|outstanding|tertunggak/.test(q)){
      if(/belum disahkan|pending verification|menunggu kelulusan/.test(q)){const verifyRows=[...inc.filter(r=>filter(r)&&r.status==='Pending Approval'),...exp.filter(r=>filter(r)&&r.status==='Pending Approval'),...rec.filter(r=>filter(r)&&(['Pending Verification','Pending Approval'].includes(r.status)||(r.requestedStatus&&r.approvalStatus==='Pending Approval')))];return verifyRows.length?`${verifyRows.length} rekod kewangan menunggu pengesahan/kelulusan:\n${verifyRows.slice(0,8).map(r=>`• ${r.referenceNo||''} ${r.payer||r.source||r.vendor||''} — ${formatMYR(r.amount)} (${STATUS_LABELS[r.status]||r.status})`).join('\n')}`:'Tiada rekod kewangan menunggu pengesahan.';}
      const pending=pay.filter(r=>filter(r)&&['Pending Payment','Pending','Unpaid','Overdue','Partial'].includes(r.status));return pending.length?`${pending.length} pembayaran belum dibuat, berjumlah ${formatMYR(outstanding)}:\n${pending.slice(0,8).map(r=>`• ${r.referenceNo} ${r.payer} — baki ${formatMYR(Math.max(0,Number(r.amount||0)-paidAmount(r)))}`).join('\n')}`:`Tiada pembayaran tertunggak. Jumlah dibayar/disahkan: ${formatMYR(paid)}.`;
    }
    return `Ringkasan kewangan ${label}:\n• Pendapatan diluluskan: ${formatMYR(income)}\n• Terima bayaran disahkan: ${formatMYR(received)}\n• Perbelanjaan diluluskan: ${formatMYR(expenses)}\n• Bayaran keluar disahkan: ${formatMYR(paid)}\n• Baki: ${formatMYR(income+received-expenses-paid)}\n• Bayaran tertunggak: ${formatMYR(outstanding)}.`;
  }
  if(/pengumuman|announcement/.test(q))return can('announcements','add')?'Untuk menerbitkan pengumuman, buka modul Pengumuman → Tambah pengumuman. Saya boleh membantu menyusun teks, tetapi local helper ini tidak menjana kandungan bebas.':'Anda tidak mempunyai permission untuk mencipta pengumuman.';
  if(/bulan ini|month/.test(q)&&/aktiviti/.test(q)){
    const parts=[];for(const t of ['events','announcements','incidents'])if(can(t,'view')){const rows=visibleRows(t,await db.all(t));const dateKey=t==='announcements'?'publishDate':t==='incidents'?'reportedAt':'date';parts.push(`${MODULE_LABELS[t]}: ${rows.filter(r=>String(r[dateKey]||'').startsWith(month)).length}`);}return `Aktiviti bulan ini: ${parts.join(' · ')||'tiada modul yang dibenarkan untuk dilihat'}.`;
  }
  return 'Saya belum mempunyai jawapan setempat untuk soalan itu. Cuba “ringkasan komuniti”, “berapa jumlah ahli aktif?”, “senaraikan laporan kejadian yang belum selesai” atau “ringkasan kewangan bulan ini”.';
}
async function submitAIQuestion(question){
  const localOn=await getSetting('localAI',true);const box=$('#ai-messages');if(!box){toast('AI Helper','Buka modul AI Helper dahulu.','warning');return;}const userBubble=document.createElement('div');userBubble.className='chat-bubble user';userBubble.textContent=question;box.appendChild(userBubble);const bot=document.createElement('div');bot.className='chat-bubble bot';bot.textContent='Menganalisis data yang dibenarkan...';box.appendChild(bot);box.scrollTop=box.scrollHeight;
  try{bot.textContent=localOn?await answerLocalAI(question):'AI local helper dimatikan. Aktifkan semula dalam Tetapan → Privasi & AI untuk membuat analisis setempat.';}catch(err){bot.textContent=`Tidak dapat menjawab: ${err.message||'Ralat local.'}`;}box.scrollTop=box.scrollHeight;await writeAudit('Pertanyaan local AI','ai','',String(question).slice(0,80));
}
function parseCSV(text){
  const rows=[];let row=[],cell='',quoted=false;for(let i=0;i<text.length;i++){const c=text[i];if(quoted){if(c==='"'&&text[i+1]==='"'){cell+='"';i++;}else if(c==='"')quoted=false;else cell+=c;}else if(c==='"')quoted=true;else if(c===','){row.push(cell);cell='';}else if(c==='\n'){row.push(cell.replace(/\r$/,''));rows.push(row);row=[];cell='';}else cell+=c;}row.push(cell.replace(/\r$/,''));if(row.some(x=>x!==''))rows.push(row);return rows;
}
function openImportDialog(){
  if(!can('members','add'))throw new Error('Anda tidak mempunyai permission import ahli.');const picker=document.createElement('input');picker.type='file';picker.accept='.csv,text/csv';picker.onchange=async()=>{const file=picker.files?.[0];if(!file)return;try{const parsed=parseCSV(await file.text());if(parsed.length<2)throw new Error('Fail CSV kosong atau tiada baris data.');const headers=parsed[0].map(h=>h.trim().toLowerCase());const normalized=parsed.slice(1).filter(r=>r.some(v=>v.trim())).map(values=>Object.fromEntries(headers.map((h,i)=>[h,values[i]||''])));const aliases={name:['name','nama','nama penuh'],phone:['phone','telefon','no telefon','no. telefon'],email:['email','e-mel'],category:['category','kategori'],location:['location','kawasan','alamat'],joined:['joined','tarikh menyertai'],status:['status']};const pick=(row,key)=>{const h=aliases[key].find(x=>Object.hasOwn(row,x));return h?row[h].trim():'';};const current=await db.all('members');const items=normalized.map((r,i)=>({row:i+2,name:pick(r,'name'),phone:pick(r,'phone'),email:pick(r,'email'),category:pick(r,'category')||'Penduduk',location:pick(r,'location'),joined:pick(r,'joined')||todayISO(),status:pick(r,'status')||'Active'}));const errors=[];items.forEach(r=>{if(!r.name)errors.push(`Baris ${r.row}: nama wajib.`);if(r.phone&&!validPhone(r.phone))errors.push(`Baris ${r.row}: telefon tidak sah.`);if(current.some(m=>(r.email&&m.email?.toLowerCase()===r.email.toLowerCase())||(r.phone&&m.phone===r.phone)))errors.push(`Baris ${r.row}: duplicate dengan rekod sedia ada.`);});window._importRows=items.filter(r=>r.name&&(!r.phone||validPhone(r.phone))&&!current.some(m=>(r.email&&m.email?.toLowerCase()===r.email.toLowerCase())||(r.phone&&m.phone===r.phone)));window._importErrors=errors;const preview=window._importRows.slice(0,6);openDialog('Pratonton import CSV',`${window._importRows.length} rekod boleh diimport · ${errors.length} ralat/duplicate`,`${errors.length?`<div class="danger-callout">${errors.slice(0,8).map(escapeHtml).join('<br>')}${errors.length>8?'<br>…':''}</div>`:''}<div class="table-scroll"><table class="data-table" style="min-width:500px"><thead><tr><th>Nama</th><th>Telefon</th><th>Email</th><th>Kategori</th></tr></thead><tbody>${preview.map(r=>`<tr><td>${escapeHtml(r.name)}</td><td>${escapeHtml(r.phone||'—')}</td><td>${escapeHtml(r.email||'—')}</td><td>${escapeHtml(r.category)}</td></tr>`).join('')||'<tr><td colspan="4">Tiada rekod sah.</td></tr>'}</tbody></table></div><p class="hint" style="margin-top:12px">Format CSV: name / nama, phone / telefon, email, category / kategori, location / kawasan, joined, status. CSV boleh dibuka dalam Excel; fail .xlsx belum disokong dalam browser edition.</p>`,`<button class="btn btn-secondary" data-action="close-dialog">Batal</button><button class="btn btn-primary" data-action="confirm-import" ${window._importRows.length?'':'disabled'}>${icon('upload')} Import ${window._importRows.length} rekod</button>`);}catch(err){toast('Import gagal',err.message,'error');}};picker.click();
}
async function confirmImport(){
  if(!can('members','add'))throw new Error('Akses import ditolak.');const items=window._importRows||[];let count=0,failed=0;for(const r of items){try{await serviceSave('members',{name:r.name,phone:r.phone,email:r.email,category:r.category,location:r.location,joined:r.joined,status:r.status});count++;}catch{failed++;}}closeDialog();await renderApp();toast('Import selesai',`${count} berjaya · ${failed+(window._importErrors||[]).length} ralat atau duplicate.`);window._importRows=[];window._importErrors=[];
}
async function runGlobalSearch(query){
  const q=query.toLowerCase();const modules=['members','households','announcements','events','incidents','complaints','volunteers','meetings','documents','income','expenses','payments','receivedPayments'];const results=[];
  for(const module of modules){if(!can(module,'view'))continue;const rows=visibleRows(module,await db.all(module));for(const r of rows){const fields=Object.entries(r).filter(([k,v])=>!['fileData','passHash','passSalt','recoveryHash','recoverySalt','table','readBy'].includes(k)&&typeof v!=='object');if(fields.some(([,v])=>String(v??'').toLowerCase().includes(q))){results.push({module,id:r.id,title:r.title||r.name||r.referenceNo||r.caseNo||r.receiptNo||'Rekod',subtitle:r.email||r.category||r.location||r.purpose||r.date||MODULE_LABELS[module]});if(results.length>=40)break;}}if(results.length>=40)break;}
  const body=results.length?`<div class="activity-list">${results.map(r=>`<button class="activity-item" style="text-align:left;border:0;background:transparent;width:100%;cursor:pointer" data-action="search-open" data-route="${r.module}" data-id="${r.id}"><span class="activity-dot">${icon(TABLE_CONFIG[r.module]?.icon||'search','sm')}</span><span style="flex:1"><strong>${escapeHtml(r.title)}</strong><small>${escapeHtml(MODULE_LABELS[r.module]||r.module)} · ${escapeHtml(r.subtitle||'')}</small></span>${icon('arrowRight','sm')}</button>`).join('')}</div>`:`<div class="empty-state"><span class="empty-illustration">${icon('search','xl')}</span><strong>Tiada padanan untuk “${escapeHtml(query)}”</strong><p>Semak ejaan atau cari istilah lain. Hanya modul yang anda boleh lihat dimasukkan.</p></div>`;
  openDialog('Carian seluruh komuniti',`Carian untuk “${query}” · ${results.length} hasil`,body,`<button class="btn btn-secondary" data-action="close-dialog">Tutup</button>`);
}
function showInstallToast(){if(installPrompt)toast('Pasang UNIKI','Gunakan menu untuk menambah aplikasi ke skrin utama.','warning');}

/* Final delegated actions and boot. */
const _oldHandleClick=handleClick;
handleClick=async function(event){
  const el=event.target.closest('[data-action]');if(!el){return _oldHandleClick(event);}
  const action=el.dataset.action;
  if(action==='search-open'){currentPage=el.dataset.route;listSearchValue=globalSearchValue;closeDialog();await renderApp();return;}
  if(action==='delete-role-confirm'){try{await confirmDeleteRole(el.dataset.id);}catch(err){toast('Tidak dapat memadam peranan',err.message,'error');}return;}
  if(action==='attendance-toggle'){try{guard('events','view');guard('events','edit');const p=await db.get('eventParticipants',el.dataset.id);if(!p)throw new Error('Peserta tidak ditemui.');p.attendance=el.dataset.attendance;await db.put('eventParticipants',p);await writeAudit('Kehadiran acara','events',p.eventId,p.userName);const eventId=p.eventId;closeDialog();await showParticipants(eventId);toast('Kehadiran dikemas kini',p.attendance==='Attended'?'Ditandakan hadir.':'Ditandakan tidak hadir.');}catch(err){toast('Tidak dapat kemas kini',err.message,'error');}return;}
  if(action==='export-event-participants'){guard('events','view');guard('events','edit');const rows=(await db.all('eventParticipants')).filter(p=>p.eventId===el.dataset.id);if(!rows.length){toast('Tiada peserta','Belum ada pendaftaran.','warning');return;}const csv=['Nama,Status pendaftaran,Kehadiran,Tarikh daftar',...rows.map(r=>[r.userName,r.status,r.attendance,r.registeredAt].map(csvCell).join(','))].join('\r\n');downloadBlob('\ufeff'+csv,'uniki-event-participants.csv','text/csv');toast('Senarai peserta dieksport',`${rows.length} peserta.`);return;}
  if(action==='notification-read'){const id=el.dataset.id;closeDialog();await markAnnouncementRead(id);return;}
  if(action==='factory-reset-final'){try{await performFactoryReset(true);}catch(err){toast('Reset gagal',err.message||'Sila cuba semula.','error');}return;}
  if(action==='restore-records-confirm'){const records=window._pendingRestore;if(!records)throw new Error('Data restore tiada.');try{await finishRestore(records);window._pendingRestore=null;}catch(err){toast('Restore gagal',err.message||'Sila cuba semula.','error');}return;}
  if(action==='restore-snapshot-confirm'){const snapshot=window._snapshotPending;if(!snapshot)throw new Error('Snapshot tiada.');try{await finishSnapshotRestore(snapshot);}catch(err){toast('Restore gagal',err.message,'error');}window._snapshotPending=null;return;}
  if(action==='confirm-import'){try{await confirmImport();}catch(err){toast('Import gagal',err.message,'error');}return;}
  return _oldHandleClick(event);
};
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;});
window.addEventListener('appinstalled',()=>toast('UNIKI dipasang','Aplikasi boleh dibuka dari skrin utama.'));
init().catch(err=>{console.error(err);root.innerHTML=`<main class="auth-panel"><div class="auth-card"><h2>Ralat memulakan UNIKI</h2><p class="auth-subtitle">${escapeHtml(err.message||'Sila muat semula aplikasi.')}</p><button class="btn btn-primary" onclick="location.reload()">Muat semula</button></div></main>`;});
