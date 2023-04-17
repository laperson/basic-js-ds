const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {

  constructor() {
    this.rootN = null
  }

  root() {
    return this.rootN;
  }

  add(data) {
    let node = new Node(data);
    if (this.rootN == null) {
      this.rootN = node;
      return;
    }

    let currN = this.rootN;
    while (currN !== null) {
      if (data < currN.data) {

        if (currN.left == null) {
         currN.left = node;
          break;
        } else currN = currN.left;

      } else if (data > currN.data) {

        if (currN.right == null) {
          currN.right = node;
        break;

        } else currN = currN.right;
      } else break;
    }}

  has(data) {
    let currN = this.rootN;

    while (currN !== null) {
      if (data < currN.data) {
        currN = currN.left;
      } else if (data > currN.data) {
        currN = currN.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let currN = this.rootN;

    while (currN !== null) {
      if (data < currN.data) {
        currN = currN.left;
      } else if (data > currN.data) {
        currN = currN.right;
      } else return currN;
    }

     return null;
  }

  remove(data) {
    let parentN = null;
    let currN = this.rootN;

    while (currN !== null && data !== currN.data) {
      parentN = currN;

      if (data < currN.data) {
        currN = currN.left;
      } else if (data > currN.data) {
        currN = currN.right;
      }
    }
     if (currN == null) return;

    if (currN.left == null && currN.right == null) {

      if (parentN == null) {
        this.rootN = null;
      } else if (parentN.left == currN) {
        parentN.left = null;
      } else if (parentN.right == currN) {
        parentN.right = null;
      }

    } else if ((currN.left !== null && currN.right == null) 
            || (currN.left == null && currN.right !== null)) {
      let childN = (currN.left !== null && currN.right == null) ? currN.left 
                                                                 : currN.right;
      if (parentN == null) {
        this.rootN = childN;
      } else if (parentN.left == currN) {
        parentN.left = childN;
      } else if (parentN.right == currN) {
        parentN.right = childN;
      }

    } else if ((currN.left !== null && currN.right !== null)) {
       let minRightN = this.findMin(currN.right);
      let minRightD = minRightN.data;
      this.remove(minRightD);
      minRightN.left = currN.left;
       minRightN.right = currN.right;

      if (parentN == null) {
        this.rootN = minRightN;
      } else {
        if (parentN.left !== null && parentN.left.data == data) {
          parentN.left = minRightN;
        } else parentN.right = minRightN;
      }
    }}

  findMin(node) {
    let LeftChild = node;

    while ( LeftChild !== null && LeftChild.left !== null)  LeftChild = LeftChild.left;
    return LeftChild;
}

  min() { if (this.rootN == null) return null;
  let currN = this.rootN;
  
  while (currN.left !== null) currN = currN.left;
  return currN.data;
  }

  max() { if (this.rootN == null) return null; 
  let currN = this.rootN;
  
  while (currN.right !== null) currN = currN.right;
  return currN.data;
  } 
}
  



module.exports = {
  BinarySearchTree
};