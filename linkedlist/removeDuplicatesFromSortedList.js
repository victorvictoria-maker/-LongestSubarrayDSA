function deleteDuplicates(head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

function convertArrayToList(arr) {
  let dummy = { val: 0, next: null };
  let current = dummy;
  for (let num of arr) {
    current.next = { val: num, next: null };
    current = current.next;
  }
  return dummy.next;
}

function convertListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// let head = convertArrayToList([1, 1, 2, 2, 2, 3, 3, 3, 3]);
// console.log(convertListToArray(deleteDuplicates(head)));
