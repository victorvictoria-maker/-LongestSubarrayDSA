const solution = (arr = [], x, y) => {
  let num_of_x = 0;
  let num_of_y = 0;

  let first_index_of_x = -1;
  let first_index_of_y = -1;
  let last_index_of_x = 0;
  let last_index_of_y = 0;
  let next_to_last_index_x = 0;
  let next_to_last_index_of_y = 0;

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num === x) {
      num_of_x++;
    }

    if (num === y) {
      num_of_y++;
    }
  }

  const num_with_lowest_occurence = num_of_x < num_of_y ? x : y;
  let second_count_of_x = 0;
  let second_count_of_y = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num === x) {
      if (num_with_lowest_occurence === y && second_count_of_x > num_of_y) {
        continue;
      }
      if (first_index_of_x === -1) first_index_of_x = i;
      second_count_of_x++;
      next_to_last_index_x = last_index_of_x;
      last_index_of_x = i;
    }

    if (num === y) {
      if (num_with_lowest_occurence === x && second_count_of_y > num_of_x) {
        continue;
      }
      if (first_index_of_y === -1) first_index_of_y = i;
      second_count_of_y++;
      next_to_last_index_of_y = last_index_of_y;
      last_index_of_y = i;
    }
  }

  let highest_index =
    last_index_of_x > last_index_of_y ? last_index_of_x : last_index_of_y;
  let lowest_index =
    first_index_of_x < first_index_of_y ? first_index_of_x : first_index_of_y;

  if (num_of_x !== num_of_y) {
    const excess_highest =
      num_of_x > num_of_y ? next_to_last_index_x : next_to_last_index_of_y;
    const nonexcess_highest =
      num_of_x < num_of_y ? last_index_of_x : last_index_of_y;
    highest_index =
      excess_highest > nonexcess_highest ? excess_highest : nonexcess_highest;
  }

  result = highest_index - lowest_index + 1;
  return result;
};

const arr = [1, 2, 3, 2, 3, 1, 3, 2, 1];
const arr2 = [
  4, 5, 4, 6, 4, 5, 5, 4, 5, 6, 5, 4, 6, 1, 2, 7, 5, 4, 5, 4, 6, 4, 5, 4, 5, 5,
  6, 5, 7, 8, 9, 5,
];
console.log(solution(arr, 2, 3));
console.log(solution(arr2, 4, 5));
