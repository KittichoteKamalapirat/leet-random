const fileNames = [
  "0001-two-sum.py",
  "0002-add-two-numbers.py",
  "0003-longest-substring-without-repeating-characters.py",
  "0004-median-of-two-sorted-arrays.py",
  "0005-longest-palindromic-substring.py",
  "0007-reverse-integer.py",
  "0009-palindrome-number.py",
  "0010-regular-expression-matching.py",
  "0011-container-with-most-water.py",
  "0012-integer-to-roman.py",
  "0013-roman-to-integer.py",
  "0014-longest-common-prefix.py",
  "0015-3sum.py",
  "0017-letter-combinations-of-a-phone-number.py",
  "0018-4sum.py",
  "0019-remove-nth-node-from-end-of-list.py",
  "0020-valid-parentheses.py",
  "0021-merge-two-sorted-lists.py",
  "0022-generate-parentheses.py",
  "0023-merge-k-sorted-lists.py",
  "0024-swap-nodes-in-pairs.py",
  "0025-reverse-nodes-in-k-group.py",
  "0026-remove-duplicates-from-sorted-array.py",
  "0027-remove-element.py",
  "0028-find-the-index-of-the-first-occurrence-in-a-string.py",
  "0033-search-in-rotated-sorted-array.py",
  "0034-find-first-and-last-position-of-element-in-sorted-array.py",
  "0035-search-insert-position.py",
  "0036-valid-sudoku.py",
  "0039-combination-sum.py",
  "0040-combination-sum-ii.py",
  "0041-first-missing-positive.py",
  "0042-trapping-rain-water.py",
  "0043-multiply-strings.py",
  "0045-jump-game-ii.py",
  "0046-permutations.py",
  "0047-permutations-ii.py",
  "0048-rotate-image.py",
  "0049-group-anagrams.py",
  "0050-powx-n.py",
  "0051-n-queens.py",
  "0052-n-queens-ii.py",
  "0053-maximum-subarray.py",
  "0054-spiral-matrix.py",
  "0055-jump-game.py",
  "0056-merge-intervals.py",
  "0057-insert-interval.py",
  "0058-length-of-last-word.py",
  "0061-rotate-list.py",
  "0062-unique-paths.py",
  "0063-unique-paths-ii.py",
  "0064-minimum-path-sum.py",
  "0066-plus-one.py",
  "0067-add-binary.py",
  "0068-text-justification.py",
  "0069-sqrtx.py",
  "0070-climbing-stairs.py",
  "0071-simplify-path.py",
  "0072-edit-distance.py",
  "0073-set-matrix-zeroes.py",
  "0074-search-a-2d-matrix.py",
  "0075-sort-colors.py",
  "0076-minimum-window-substring.py",
  "0077-combinations.py",
  "0078-subsets.py",
  "0079-word-search.py",
  "0080-remove-duplicates-from-sorted-array-ii.py",
  "0083-remove-duplicates-from-sorted-list.py",
  "0084-largest-rectangle-in-histogram.py",
  "0086-partition-list.py",
  "0088-merge-sorted-array.py",
  "0090-subsets-ii.py",
  "0091-decode-ways.py",
  "0092-reverse-linked-list-ii.py",
  "0094-binary-tree-inorder-traversal.py",
  "0097-interleaving-string.py",
  "0098-validate-binary-search-tree.py",
  "0100-same-tree.py",
  "0101-symmetric-tree.py",
  "0102-binary-tree-level-order-traversal.py",
  "0103-binary-tree-zigzag-level-order-traversal.py",
  "0104-maximum-depth-of-binary-tree.py",
  "0105-construct-binary-tree-from-preorder-and-inorder-traversal.py",
  "0106-construct-binary-tree-from-inorder-and-postorder-traversal.py",
  "0108-convert-sorted-array-to-binary-search-tree.py",
  "0110-balanced-binary-tree.py",
  "0112-path-sum.py",
  "0115-distinct-subsequences.py",
  "0118-pascals-triangle.py",
  "0119-pascal-triangle-ii.py",
  "0120-triangle.py",
  "0121-best-time-to-buy-and-sell-stock.py",
  "0122-best-time-to-buy-and-sell-stock-ii.py",
  "0124-binary-tree-maximum-path-sum.py",
  "0125-valid-palindrome.py",
  "0127-word-ladder.py",
  "0128-longest-consecutive-sequence.py",
  "0130-surrounded-regions.py",
  "0131-palindrome-partitioning.py",
  "0133-clone-graph.py",
  "0134-gas-station.py",
  "0136-single-number.py",
  "0138-copy-list-with-random-pointer.py",
  "0139-word-break.py",
  "0141-linked-list-cycle.py",
  "0143-reorder-list.py",
  "0144-binary-tree-preorder-traversal.py",
  "0145-binary-tree-postorder-traversal.py",
  "0146-lru-cache.py",
  "0147-insertion-sort-list.py",
  "0148-sort-list.py",
  "0149-max-points-on-a-line.py",
  "0150-evaluate-reverse-polish-notation.py",
  "0152-maximum-product-subarray.py",
  "0153-find-minimum-in-rotated-sorted-array.py",
  "0155-min-stack.py",
  "0160-intersection-of-two-linked-lists.py",
  "0162-find-peak-element.py",
  "0167-two-sum-ii-input-array-is-sorted.py",
  "0168-excel-sheet-column-title.py",
  "0169-majority-element.py",
  "0179-largest-number.py",
  "0187-repeated-dna-sequences.py",
  "0189-rotate-array.py",
  "0190-reverse-bits.py",
  "0191-number-of-1-bits.py",
  "0198-house-robber.py",
  "0199-binary-tree-right-side-view.py",
  "0200-number-of-islands.py",
  "0201-bitwise-and-of-numbers-range.py",
  "0202-happy-number.py",
  "0203-remove-linked-list-elements.py",
  "0205-isomorphic-strings.py",
  "0206-reverse-linked-list.py",
  "0207-course-schedule.py",
  "0208-implement-trie-prefix-tree.py",
  "0209-minimum-size-subarray-sum.py",
  "0210-course-schedule-ii.py",
  "0211-design-add-and-search-words-data-structure.py",
  "0212-word-search-ii.py",
  "0213-house-robber-ii.py",
  "0215-kth-largest-element-in-an-array.py",
  "0217-contains-duplicate.py",
  "0219-contains-duplicate-ii.py",
  "0221-maximal-square.py",
  "0225-implement-stack-using-queues.py",
  "0226-invert-binary-tree.py",
  "0230-kth-smallest-element-in-a-bst.py",
  "0231-power-of-two.py",
  "0232-implement-queue-using-stacks.py",
  "0234-palindrome-linked-list.py",
  "0235-lowest-common-ancestor-of-a-binary-search-tree.py",
  "0236-lowest-common-ancestor-of-a-binary-tree.py",
  "0238-product-of-array-except-self.py",
  "0239-sliding-window-maximum.py",
  "0242-valid-anagram.py",
  "0252-meeting-rooms.py",
  "0253-meeting-rooms-ii.py",
  "0253-meeting-rooms.py",
  "0261-graph-valid-tree.py",
  "0263-ugly-number.py",
  "0268-missing-number.py",
  "0269-alien-dictionary.py",
  "0271-encode-and-decode-strings.py",
  "0274-H-index.py",
  "0278-first-bad-version.py",
  "0280-wiggle-sort.py",
  "0283-move-zeroes.py",
  "0286-walls-and-gates.py",
  "0287-find-the-duplicate-number.py",
  "0290-word-pattern.py",
  "0295-find-median-from-data-stream.py",
  "0297-serialize-and-deserialize-binary-tree.py",
  "0300-longest-increasing-subsequence.py",
  "0303-range-sum-query-immutable.py",
  "0304-range-sum-query-2d-immutable.py",
  "0309-best-time-to-buy-and-sell-stock-with-cooldown.py",
  "0312-burst-balloons.py",
  "0322-coin-change.py",
  "0323-number-of-connected-components-in-an-undirected-graph.py",
  "0329-longest-increasing-path-in-a-matrix.py",
  "0332-reconstruct-itinerary.py",
  "0334-increasing-triplet-subsequence.py",
  "0338-counting-bits.py",
  "0344-reverse-string.py",
  "0347-top-k-frequent-elements.py",
  "0349-intersection-of-two-arrays.py",
  "0355-design-twitter.py",
  "0367-valid-perfect-square.py",
  "0371-sum-of-two-integers.py",
  "0374-guess-number-higher-or-lower.py",
  "0377-combination-sum-iv.py",
  "0380-insert-delete-getrandom-o1.py",
  "0383-ransom-note.py",
  "0392-is-subsequence.py",
  "0394-decode-string.py",
  "0402-remove-k-digits.py",
  "0410-split-array-largest-sum.py",
  "0416-partition-equal-subset-sum.py",
  "0417-pacific-atlantic-water-flow.py",
  "0424-longest-repeating-character-replacement.py",
  "0435-non-overlapping-intervals.py",
  "0438-find-all-anagrams-in-a-string.py",
  "0441-arranging-coins.py",
  "0442-find-all-duplicates-in-an-array.py",
  "0448-find-all-numbers-disappeared-in-an-array.py",
  "0450-delete-node-in-a-bst.py",
  "0452-minimum-number-of-arrows-to-burst-balloons.py",
  "0456-132-pattern.py",
  "0459-repeated-substring-pattern.py",
  "0463-island-perimeter.py",
  "0473-matchsticks-to-square.py",
  "0474-ones-and-zeroes.py",
  "0494-target-sum.py",
  "0496-next-greater-element-i.py",
  "0502-ipo.py",
  "0509-fibonacci-number.py",
  "0516-longest-palindromic-subsequence.py",
  "0518-coin-change-ii.py",
  "0523-continuous-subarray-sum.py",
  "0525-contiguous-array.py",
  "0535-encode-and-decode-tinyurl.py",
  "0540-single-element-in-a-sorted-array.py",
  "0543-diameter-of-binary-tree.py",
  "0554-brick-wall.py",
  "0560-subarray-sum-equals-k.py",
  "0567-permutation-in-string.py",
  "0572-subtree-of-another-tree.py",
  "0605-can-place-flowers.py",
  "0606-construct-string-from-binary-tree.py",
  "0617-merge-two-binary-trees.py",
  "0621-task-scheduler.py",
  "0622-design-circular-queue.py",
  "0647-palindromic-substrings.py",
  "0658-find-k-closest-elements.py",
  "0665-non-decreasing-array.py",
  "0669-trim-a-binary-search-tree.py",
  "0673-number-of-longest-increasing-subsequence.py",
  "0678-valid-parenthesis-string.py",
  "0680-valid-palindrome-ii.py",
  "0682-baseball-game.py",
  "0684-redundant-connection.py",
  "0695-max-area-of-island.py",
  "0698-partition-to-k-equal-sum-subsets.py",
  "0701-insert-into-a-binary-search-tree.py",
  "0703-kth-largest-element-in-a-stream.py",
  "0704-binary-search.py",
  "0705-design-hashset.py",
  "0706-design-hashmap.py",
  "0707-design-linked-list.py",
  "0721-accounts-merge.py",
  "0724-find-pivot-index.py",
  "0729-my-calendar-i.py",
  "0735-asteroid-collision.py",
  "0739-daily-temperatures.py",
  "0740-delete-and-earn.py",
  "0743-network-delay-time.py",
  "0746-min-cost-climbing-stairs.py",
  "0752-open-the-lock.py",
  "0763-partition-labels.py",
  "0767-reorganize-string.py",
  "0778-swim-in-rising-water.py",
  "0783-minimum-distance-between-bst-nodes.py",
  "0787-cheapest-flights-within-k-stops.py",
  "0838-push-dominoes.py",
  "0846-hand-of-straights.py",
  "0853-car-fleet.py",
  "0862-shortest-subarray-with-sum-at-least-k.py",
  "0875-koko-eating-bananas.py",
  "0876-middle-of-the-linked-list.py",
  "0881-boats-to-save-people.py",
  "0894-all-possible-full-binary-trees.py",
  "0901-online-stock-span.py",
  "0904-fruit-into-baskets.py",
  "0904_fruit_into_baskets.py",
  "0909-snakes-and-ladders.py",
  "0912-sort-an-array.py",
  "0918-maximum-sum-circular-subarray.py",
  "0929-unique-email-addresses.py",
  "0930-binary-subarrays-with-sum.py",
  "0931-minimum-falling-path-sum.py",
  "0946-validate-stack-sequences.py",
  "0948-bag-of-tokens.py",
  "0953-verifying-an-alien-dictionary.py",
  "0973-k-closest-points-to-origin.py",
  "0977-squares-of-a-sorted-array.py",
  "0978-longest-turbulent-subarray.py",
  "0981-time-based-key-value-store.py",
  "0994-rotting-oranges.py",
  "0997-find-the-town-judge.py",
  "1011-capacity-to-ship-packages-within-d-days.py",
  "1029-two-city-scheduling.py",
  "1046-last-stone-weight.py",
  "1049-last-stone-weight-ii.py",
  "1091-shortest-path-in-binary-matrix.py",
  "1137-n-th-tribonacci-number.py",
  "1143-longest-common-subsequence.py",
  "1189-maximum-number-of-balloons.py",
  "1209-remove-all-adjacent-duplicates-in-string-ii.py",
  "1220-count-vowels-permutation.py",
  "1239-maximum-length-of-a-concatenated-string-with-unique-characters.py",
  "1260-shift-2d-grid.py",
  "1299-replace-elements-with-greatest-element-on-right-side.py",
  "1343-number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold.py",
  "1383-maximum-performance-of-a-team.py",
  "1396-design-underground-system.py",
  "1448-count-good-nodes-in-binary-tree.py",
  "1456-maximum-number-of-vowels-in-a-substring-of-given-length.py",
  "1461-check-if-a-string-contains-all-binary-codes-of-size-k.py",
  "1462-course-schedule-iv.py",
  "1464-maximum-product-of-two-elements-in-an-array.py",
  "1472-design-browser-history.py",
  "1481-least-number-of-unique-integers-after-k-removals.py",
  "1489-find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree.py",
  "1498-number-of-subsequences-that-satisfy-the-given-sum-condition.py",
  "1514-path-with-maximum-probability.py",
  "1523-count-odd-numbers-in-an-interval-range.py",
  "1584-min-cost-to-connect-all-points.py",
  "1603-design-parking-system.py",
  "1609-even-odd-tree.py",
  "1642-furthest-building-you-can-reach.py",
  "1669-merge-in-between-linked-lists.py",
  "1700-number-of-students-unable-to-eat-lunch.py",
  "1721-swapping-nodes-in-a-linked-list.py",
  "1750-minimum-length-of-string-after-deleting-similar-ends.py",
  "1768-merge-strings-alternately.py",
  "1800-maximum-ascending-subarray-sum.py",
  "1822-sign-of-the-product-of-an-array.py",
  "1834-single-threaded-cpu.py",
  "1838-frequency-of-the-most-frequent-element.py",
  "1845-seat-reservation-manager.py",
  "1849-splitting-a-string-into-descending-consecutive-values.py",
  "1851-minimum-interval-to-include-each-query.py",
  "1888-minimum-number-of-flips-to-make-the-binary-string-alternating.py",
  "1899-merge-triplets-to-form-target-triplet.py",
  "1905-count-sub-islands.py",
  "1929-concatenation-of-array.py",
  "1930-unique-length-3-palindromic-subsequences.py",
  "1958-check-if-move-is-legal.py",
  "1963-minimum-number-of-swaps-to-make-the-string-balanced.py",
  "1968-array-with-elements-not-equal-to-average-of-neighbors.py",
  "1980-find-unique-binary-string.py",
  "1984-minimum-difference-between-highest-and-lowest-of-k-scores.py",
  "1985-find-the-kth-largest-integer-in-the-array.py",
  "2001-number-of-pairs-of-interchangeable-rectangles.py",
  "2002-maximum-product-of-the-length-of-two-palindromic-subsequences.py",
  "2013-detect-squares.py",
  "2017-grid-game.py",
  "2092-find-all-people-with-secret.py",
  "2130-maximum-twin-sum-of-a-linked-list.py",
  "2215-find-the-difference-of-two-arrays.py",
  "2300-successful-pairs-of-spells-and-potions.py",
  "2348-number-of-zero-filled-subarrays.py",
  "2390-removing-stars-from-a-string.py",
  "2402-meeting-rooms-iii.py",
  "2405-optimal-partition-of-string.py",
  "2483-minimum-penalty-for-a-shop.py",
  "2709-greatest-common-divisor-traversal.py",
  "2864-maximum-odd-binary-number.py",
  "2971-find-polygon-with-the-largest-perimeter.py",
];

// Assuming `fileNames` is an array of strings available in this scope
export const getSolution = async (slug: string): Promise<string> => {
  const fileName = fileNames.find((name) => name.includes(slug));
  console.log("slug", slug);

  if (!fileName) {
    console.error("File not found for the provided slug:", slug);
    return `File not found for the provided slug:", ${slug}`; // Return null or throw an error based on your error handling strategy
  }

  try {
    const response = await fetch(`/solutions/python/${fileName}`);
    if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      return "An error occured";
    }
    const data = await response.text();
    console.log("File content:", data);
    return data;
  } catch (error) {
    console.error("Error fetching file:", error);
    return "";
  }
};