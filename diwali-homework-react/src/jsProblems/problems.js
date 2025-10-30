export const jsProblems = {
  // 1. Array Chunking
  chunkArray(arr, size) {
    if (!Array.isArray(arr) || size <= 0) return [];
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      const chunk = [];
      for (let j = i; j < i + size && j < arr.length; j++) chunk.push(arr[j]);
      res.push(chunk);
    }
    return res;
  },

  // 2. Nested Object Property Sum
  sumNestedProperty(arr, prop) {
    let sum = 0;
    function traverse(node) {
      if (Array.isArray(node)) node.forEach(traverse);
      else if (node && typeof node === "object") {
        if (typeof node[prop] === "number") sum += node[prop];
        for (const k in node) traverse(node[k]);
      }
    }
    traverse(arr);
    return sum;
  },

  // 3. Custom Date Range Generator
  generateDateRange(start, end) {
    if (!(start instanceof Date) || !(end instanceof Date) || start > end)
      return "Invalid";
    const res = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      res.push(
        `${String(d.getDate()).padStart(2, "0")}-${String(
          d.getMonth() + 1
        ).padStart(2, "0")}-${d.getFullYear()}`
      );
    }
    return res;
  },

  // 4. API Data Filter
  async fetchTitlesByUserId(userId) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      return data
        .filter((p) => p.userId === userId)
        .map((p) => p.title.toUpperCase());
    } catch {
      return [];
    }
  },

  // 5. Dynamic Table Generator (Browser only)
  generateTable(data) {
    const table = document.createElement("table");
    table.style.border = "1px solid black";
    data.forEach((r) => {
      const tr = document.createElement("tr");
      r.forEach((c) => {
        const td = document.createElement("td");
        td.textContent = c;
        td.style.border = "1px solid black";
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    document.body.appendChild(table);
  },

  // 6. Rate-Limited Fetch
  async rateLimitedFetch(limit = 3) {
    const users = [];
    for (let i = 1; i <= limit; i++) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${i}`
      );
      const data = await res.json();
      users.push(data.name);
      await new Promise((r) => setTimeout(r, 2000));
    }
    return users;
  },

  // 7. Array Intersection
  intersection(a, b) {
    const res = [];
    for (let i = 0; i < a.length; i++)
      for (let j = 0; j < b.length; j++)
        if (a[i] === b[j] && !res.includes(a[i])) res.push(a[i]);
    return res;
  },

  // 8. Time Since Last Update
  timeSince(ts) {
    const now = new Date();
    const diff = now - new Date(ts);
    if (diff < 0) return "in the future";
    const sec = diff / 1000;
    if (sec < 60) return `${Math.floor(sec)} seconds ago`;
    const min = sec / 60;
    if (min < 60) return `${Math.floor(min)} minutes ago`;
    const hrs = min / 60;
    if (hrs < 24) return `${Math.floor(hrs)} hours ago`;
    return `${Math.floor(hrs / 24)} days ago`;
  },

  // 9. Email Validator
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  // 10. Deep Flatten
  flatten(arr) {
    const res = [];
    (function flat(a) {
      a.forEach((el) => {
        if (Array.isArray(el)) flat(el);
        else res.push(el);
      });
    })(arr);
    return res;
  },

  // 11. User Post Count Aggregator
  async postCountMap() {
    const [u, p] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
    ]);
    const map = {};
    u.forEach((x) => (map[x.id] = 0));
    p.forEach((x) => map[x.userId]++);
    return map;
  },

  // 12. Pagination
  paginate(arr, page, size) {
    if (!Array.isArray(arr) || page <= 0 || size <= 0) return [];
    const start = (page - 1) * size;
    return arr.slice(start, start + size);
  },

  // 13. Pattern Generator
  pattern(n) {
    let out = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) out += j + " ";
      out += "\n";
    }
    return out.trim();
  },

  // 14. Event Scheduler
  schedule(e, s, end) {
    const E = new Date(e),
      S = new Date(s),
      R = new Date(end);
    return E >= S && E <= R ? "Event scheduled" : "Out of range";
  },

  // 15. Cache Simulator
  _cache: {},
  async cachedFetch(url) {
    if (jsProblems._cache[url]) return jsProblems._cache[url];
    const r = await fetch(url);
    const d = await r.json();
    jsProblems._cache[url] = d;
    return d;
  },

  // 16. Dropdown Populator (browser)
  async populateDropdown(select) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    select.innerHTML = data.map((u) => `<option>${u.name}</option>`).join("");
  },

  // 17. Rotate Array
  rotateRight(arr, k) {
    const n = arr.length;
    const r = k % n;
    return arr.slice(-r).concat(arr.slice(0, n - r));
  },

  // 18. Triangular Pattern
  triangle(n) {
    return Array.from({ length: n }, (_, i) =>
      Array.from({ length: i + 1 }, (_, j) => j + 1).join(" ")
    ).join("\n");
  },

  // 19. Character Counter
  countChars(str) {
    return `Characters: ${str.length}`;
  },

  // 20. DOM Animation (browser)
  moveBox(el) {
    let pos = 0;
    const id = setInterval(() => {
      if (pos >= 100) clearInterval(id);
      else {
        pos++;
        el.style.left = pos + "px";
      }
    }, 20);
  },
};
