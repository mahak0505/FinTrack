const Store = {
  // Structure to hold default data
  getDefaults() {
    return {
      profile: {
        name: "Ansh Zamde",
        initials: "AZ",
        college: "IET DAVV",
        address: "UK", // requested by user
        geminiApiKey: ""
      },
      expenses: [
        { id: '1', name: 'Swiggy Order', cat: 'Food', amt: 320, date: new Date().toISOString() },
        { id: '2', name: 'College Bus Pass', cat: 'Travel', amt: 200, date: new Date(Date.now() - 86400000).toISOString() },
        { id: '3', name: 'Algorithm Book', cat: 'Books', amt: 360, date: new Date(Date.now() - 86400000 * 2).toISOString() },
        { id: '4', name: 'Hostel Fee', cat: 'Accommodation', amt: 1800, date: new Date(Date.now() - 86400000 * 5).toISOString() },
      ],
      income: [
        { id: 'i1', name: 'Scholarship Credited', cat: 'Income', amt: 6500, date: new Date(Date.now() - 86400000 * 10).toISOString() }
      ],
      budgets: {
        Food: 2500,
        Travel: 1000,
        Books: 1000,
        Other: 2000,
        Accommodation: 3000,
        Fun: 1500,
        Health: 1000
      },
      goals: [
        { id: 'g1', name: '💻 Laptop Fund', current: 9600, target: 15000, colors: ['#2563EB', '#60A5FA'] },
        { id: 'g2', name: '🏖️ Goa Trip', current: 2240, target: 8000, colors: ['#10B981', '#6EE7B7'] }
      ],
      notifications: [
        { id: 'n1', text: 'You spent ₹320 on Food today. You have ₹2,180 left in the Food budget.', date: new Date().toISOString() },
        { id: 'n2', text: 'Your laptop fund goal has hit 64%!', date: new Date(Date.now() - 86400000).toISOString() }
      ]
    };
  },

  init() {
    if (!localStorage.getItem('finly_profile')) localStorage.setItem('finly_profile', JSON.stringify(this.getDefaults().profile));
    if (!localStorage.getItem('finly_expenses')) localStorage.setItem('finly_expenses', JSON.stringify(this.getDefaults().expenses));
    if (!localStorage.getItem('finly_income')) localStorage.setItem('finly_income', JSON.stringify(this.getDefaults().income));
    if (!localStorage.getItem('finly_budgets')) localStorage.setItem('finly_budgets', JSON.stringify(this.getDefaults().budgets));
    if (!localStorage.getItem('finly_goals')) localStorage.setItem('finly_goals', JSON.stringify(this.getDefaults().goals));
    if (!localStorage.getItem('finly_notifications')) localStorage.setItem('finly_notifications', JSON.stringify(this.getDefaults().notifications));
  },

  get(key) {
    return JSON.parse(localStorage.getItem(`finly_${key}`));
  },

  set(key, data) {
    localStorage.setItem(`finly_${key}`, JSON.stringify(data));
  },

  addExpense(name, cat, amt, note) {
    const exps = this.get('expenses');
    exps.unshift({
      id: Date.now().toString(),
      name,
      cat,
      amt: parseFloat(amt),
      note,
      date: new Date().toISOString()
    });
    this.set('expenses', exps);
  },
  
  addGoal(name, target) {
    const goals = this.get('goals');
    goals.push({
      id: Date.now().toString(),
      name: `🎯 ${name}`,
      current: 0,
      target: parseFloat(target),
      colors: ['#3B82F6', '#60A5FA']
    });
    this.set('goals', goals);
  },

  updateBudget(cat, val) {
    const b = this.get('budgets');
    b[cat] = parseFloat(val);
    this.set('budgets', b);
  },

  formatMoney(amt) {
    return '₹' + parseFloat(amt).toLocaleString('en-IN');
  },

  formatDate(isoStr) {
    const d = new Date(isoStr);
    const today = new Date();
    if (d.toDateString() === today.toDateString()) return 'Today';
    const yest = new Date(today); yest.setDate(yest.getDate() - 1);
    if (d.toDateString() === yest.toDateString()) return 'Yesterday';
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  }
};

// Initialize on load
Store.init();

// --- UI HELPERS ---
function toggleDropdown(id) {
  const el = document.getElementById(id);
  if(!el) return;
  const isActive = el.classList.contains('active');
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
  if(!isActive) el.classList.add('active');
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

function openModal(id) {
  closeModals();
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
}

// Global click to close dropdowns
document.addEventListener('click', (e) => {
  if(!e.target.closest('.tb-notif') && !e.target.closest('.tb-av') && !e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
  }
});

// Update Profile HTML across the app
document.addEventListener('DOMContentLoaded', () => {
  const pro = Store.get('profile');
  document.querySelectorAll('.sb-av').forEach(el => el.textContent = pro.initials);
  document.querySelectorAll('.tb-av').forEach(el => el.textContent = pro.initials);
  document.querySelectorAll('.sb-name').forEach(el => el.textContent = pro.name);
  document.querySelectorAll('.sb-college').forEach(el => el.textContent = `${pro.college} · ${pro.address}`);
  
  // Update Notification Dropdown Content
  const notifDd = document.getElementById('notifDropdown');
  if(notifDd) {
    const notifs = Store.get('notifications');
    let html = '<div class="dd-hdr">Notifications</div>';
    if(notifs.length===0) html += '<div class="no-data">No new notifications</div>';
    notifs.forEach(n => {
      html += `<div class="dd-item">
        <div class="dd-note"><span class="dd-note-ico">🤖</span> <span>${n.text}</span></div>
        <div style="font-size: .6rem; color: var(--text-muted); margin-top: 4px; padding-left: 28px;">${Store.formatDate(n.date)}</div>
      </div>`;
    });
    notifDd.innerHTML = html;
    if(notifs.length>0) {
      document.querySelectorAll('.notif-badge').forEach(b => b.style.display = 'block');
    }
  }

  // Update Profile Dropdown Content
  const profDd = document.getElementById('profileDropdown');
  if(profDd) {
    profDd.innerHTML = `
      <div class="dd-hdr">Account Info</div>
      <div class="dd-item" style="padding: 0;">
        <a href="profile.html" style="display:flex; align-items:center; gap: 10px; color:var(--text); text-decoration:none; padding: .8rem; border-radius: 8px; transition: background .2s;" onmouseover="this.style.background='var(--white-04)'" onmouseout="this.style.background='transparent'">
          <div class="sb-av" style="flex-shrink:0;">${pro.initials}</div>
          <div>
            <div style="font-weight: 600; font-size: .9rem;">${pro.name}</div>
            <div style="font-size:.7rem; color:var(--text-muted);">${pro.college} · ${pro.address}</div>
          </div>
        </a>
      </div>
      <div class="dd-item">
        <a href="settings.html" style="color:var(--text); text-decoration:none; display:flex; justify-content:space-between;">
          <span>⚙️ Settings</span> <span style="color:var(--text-muted);">→</span>
        </a>
      </div>
      <div class="dd-item">
        <a href="finly-landing.html" style="color:var(--danger); text-decoration:none; display:flex; justify-content:space-between;">
          <span>🚪 Sign Out</span>
        </a>
      </div>
    `;
  }
});
