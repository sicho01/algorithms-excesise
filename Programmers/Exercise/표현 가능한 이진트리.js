// url: https://school.programmers.co.kr/learn/courses/30/lessons/150367
// binary search

function checkTree(tree, parent) {
  if (parent === "0" && tree.indexOf("1") !== -1) {
    return false;
  }
  if (tree.length === 0) {
    return true;
  }

  const prevParent = parseInt(tree.length / 2);
  return (
    checkTree(tree.slice(0, prevParent), tree[prevParent]) &&
    checkTree(tree.slice(prevParent + 1), tree[prevParent])
  );
}

function makeCompleteBinaryTree(num) {
  const binNum = num.toString(2);
  const lengthOfBinNum = binNum.length;
  const treeHeight = Math.ceil(Math.log2(lengthOfBinNum + 1));
  const numberOfNodes = 2 ** treeHeight - 1;

  return "0".repeat(numberOfNodes - lengthOfBinNum) + binNum;
}

function solution(numbers) {
  const answer = numbers.map((num) => {
    const completeBinaryTree = makeCompleteBinaryTree(num);
    const root = completeBinaryTree[parseInt(completeBinaryTree.length / 2)];

    return Number(checkTree(completeBinaryTree, root));
  });

  return answer;
}

console.log(solution([7, 42, 5]));
console.log(solution([63, 111, 95]));
