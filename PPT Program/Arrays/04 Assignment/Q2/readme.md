# Assignment 04 (Question 2)

<aside>
💡 **Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return _a list_ answer _of size_ 2 _where:_

- answer[0] _is a list of all **distinct** integers in_ nums1 _which are **not** present in_ nums2*.*
- answer[1] _is a list of all **distinct** integers in_ nums2 _which are **not** present in_ nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

</aside>
