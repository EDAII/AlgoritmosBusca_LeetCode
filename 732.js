class Node {
  constructor() {
    this.left = null;
    this.right = null;
    this.max = 0;
    this.add = 0;
  }
}

class MyCalendarThree {
  constructor() {
    this.root = new Node();
    this.L = 0;
    this.R = 1e9; // domínio [0, 1e9]
  }

  book(start, end) {
    this.#update(this.root, this.L, this.R, start, end - 1, 1);
    return this.root.max;
  }

  #update(node, l, r, ql, qr, val) {
    if (ql <= l && r <= qr) {
      node.max += val;
      node.add += val;
      return;
    }
    const mid = (l + r) >> 1;
    if (!node.left) node.left = new Node();
    if (!node.right) node.right = new Node();

    if (ql <= mid) this.#update(node.left, l, mid, ql, qr, val);
    if (qr > mid)  this.#update(node.right, mid + 1, r, ql, qr, val);

    node.max = node.add + Math.max(node.left.max, node.right.max);
  }
}

// Exemplo de uso:
const cal = new MyCalendarThree();
console.log(cal.book(10, 20)); // 1
console.log(cal.book(50, 60)); // 1
console.log(cal.book(10, 40)); // 2
console.log(cal.book(5, 15));  // 3
console.log(cal.book(5, 10));  // 3
console.log(cal.book(25, 55)); // 3
