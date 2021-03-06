class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) this.root = newNode;

    let current = this.root;

    while (current) {
      if (val < current.val && current.left === null) {
        current.left = newNode;
      } else if (val > current.val && current.right === null) {
        current.right = newNode;
      }

      current = val < current.val
        ? current.left
        : current.right;
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curr=this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    
    if (val < curr.val){
      if (curr.left === null){
        curr.left = new Node(val);

        return this;
      } 

      return this.insertRecursively(val, curr.left);
    } else {
      if (curr.right === null){
        curr.right = new Node(val);
        
        return this;
      }

      return this.insertRecursively(val, curr.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) return current;

      current = val < current.val
        ? current.left
        : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, nodeVals = []) {
    nodeVals.push(node.val);

    if (node.left) this.dfsPreOrder(node.left, nodeVals);
    if (node.right) this.dfsPreOrder(node.right, nodeVals)

    return nodeVals;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, nodeVals = []) {
    if (node.left) this.dfsInOrder(node.left, nodeVals);
    nodeVals.push(node.val);
    if (node.right) this.dfsInOrder(node.right, nodeVals);

    return nodeVals;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, nodeVals = []) {
    if (node.left) this.dfsPostOrder(node.left, nodeVals);
    if (node.right) this.dfsPostOrder(node.right, nodeVals);
    nodeVals.push(node.val);

    return nodeVals;
  }

  /** bfs(): Traverse the tree using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let vals = [];

    while (queue.length){
      let current = queue.shift();

      vals.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return vals;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
