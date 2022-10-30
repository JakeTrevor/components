interface TreeLike<T> {
  value: T;
  children: TreeLike<T>[];
}

interface BinaryTreeLike<T> extends TreeLike<T> {
  left?: BinaryTreeLike<T>;
  right?: BinaryTreeLike<T>;
}
