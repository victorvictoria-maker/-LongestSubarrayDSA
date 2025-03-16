function hasPathSum(tree, targetSum) {
  if (!tree) return false;

  if (!tree.left && !tree.right) {
    return targetSum === tree.val;
  }

  let remainingSum = targetSum - tree.val;
  return (
    hasPathSum(tree.left, remainingSum) || hasPathSum(tree.right, remainingSum)
  );
}

function createTreeFromArray(values, index = 0) {
  if (index >= values.length || values[index] === null) return null;

  let node = { val: values[index], left: null, right: null };
  node.left = createTreeFromArray(values, 2 * index + 1);
  node.right = createTreeFromArray(values, 2 * index + 2);

  return node;
}

let tree1 = createTreeFromArray([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1,
]);
console.log(hasPathSum(tree1, 22));

let tree2 = createTreeFromArray([1, 2, 3]);
console.log(hasPathSum(tree2, 5));

let tree3 = createTreeFromArray([]);
console.log(hasPathSum(tree3, 0));
