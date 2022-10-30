class binTree<T> implements BinaryTreeLike<T> {
  value: T;
  left?: BinaryTreeLike<T> | undefined;
  right?: BinaryTreeLike<T> | undefined;

  children: TreeLike<T>[] = [];

  constructor(val: T) {
    this.value = val;
  }

  setLeft(value: T) {
    let node = new binTree<T>(value);
    this.children[0] = node;
    this.left = node;
  }

  setRight(value: T) {
    let node = new binTree<T>(value);
    this.children[1] = node;
    this.right = node;
  }
}

export default binTree;

export let sample: TreeLike<string> = {
  value: "Root",
  children: [
    {
      value: "Child A",
      children: [
        { value: "Child A-A", children: [] },
        { value: "Child A-B", children: [] },
      ],
    },
    { value: "Child B", children: [] },
    { value: "Child C", children: [] },
  ],
};
