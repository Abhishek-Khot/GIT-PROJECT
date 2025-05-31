// const mongoose = require('mongoose');
// const Problem = require('./models/Problem');

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/interview', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Problem data
// const problems = [
// //   {
// //     title: "Rotate Array",
// //     titleSlug: "rotate-array",
// //     questionId: 1,
// //     difficulty: "Medium",
// //     difficultyScore: 6.0,
// //     tags: ["Array", "Math", "Two Pointers"],
// //     description: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
// //     exampleTestCases: [
// //       "Input: nums = [1,2,3,4,5,6,7], k = 3\nOutput: [5,6,7,1,2,3,4]",
// //       "Input: nums = [-1,-100,3,99], k = 2\nOutput: [3,99,-1,-100]"
// //     ],
// //     constraints: [
// //       "1 <= nums.length <= 10^5",
// //       "-2^31 <= nums[i] <= 2^31 - 1",
// //       "0 <= k <= 105"
// //     ],
// //     acceptedRate: "47.8%",
// //     companies: ["Amazon", "Google", "Microsoft"],
// //     templates: {
// //       java: "class Solution {\n    public void rotate(int[] nums, int k) {\n        // TODO: Implement\n    }\n}",
// //       python: "class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        # TODO: Implement",
// //       cpp: "class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     solutions: {
// //       java: "class Solution {\n    public void rotate(int[] nums, int k) {\n        k %= nums.length;\n        reverse(nums, 0, nums.length - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n    }\n\n    private void reverse(int[] nums, int start, int end) {\n        while (start < end) {\n            int temp = nums[start];\n            nums[start] = nums[end];\n            nums[end] = temp;\n            start++;\n            end--;\n        }\n    }\n}",
// //       python: "class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        k %= len(nums)\n        nums.reverse()\n        nums[:k] = reversed(nums[:k])\n        nums[k:] = reversed(nums[k:])",
// //       cpp: "class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        int n = nums.size();\n        k %= n;\n        reverse(nums.begin(), nums.end());\n        reverse(nums.begin(), nums.begin() + k);\n        reverse(nums.begin() + k, nums.end());\n    }\n};"
// //     },
// //     hints: [
// //       "The easiest solution would use additional memory and that is perfectly fine.",
// //       "The actual trick comes when trying to solve this problem without using any additional memory."
// //     ],
// //     expectedTimeComplexity: "O(n)",
// //     expectedSpaceComplexity: "O(1)"
// //   },
// //   {
// //     title: "Container With Most Water",
// //     titleSlug: "container-with-most-water",
// //     questionId: 2,
// //     difficulty: "Medium",
// //     difficultyScore: 6.0,
// //     tags: ["Array", "Two Pointers", "Greedy"],
// //     description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
// //     exampleTestCases: [
// //       "Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49",
// //       "Input: height = [1,1]\nOutput: 1"
// //     ],
// //     constraints: [
// //       "n == height.length",
// //       "2 <= n <= 10^5",
// //       "0 <= height[i] <= 10^4"
// //     ],
// //     acceptedRate: "57.5%",
// //     companies: ["Infosys", "TCS", "Oracle"],
// //     templates: {
// //       java: "class Solution {\n    public int maxArea(int[] height) {\n        // TODO: Implement\n    }\n}",
// //       python: "class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        # TODO: Implement",
// //       cpp: "class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     solutions: {
// //       java: "class Solution {\n    public int maxArea(int[] height) {\n        int left = 0, right = height.length - 1;\n        int maxArea = 0;\n        while (left < right) {\n            int area = Math.min(height[left], height[right]) * (right - left);\n            maxArea = Math.max(maxArea, area);\n            if (height[left] < height[right]) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n        return maxArea;\n    }\n}",
// //       python: "class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        left, right = 0, len(height) - 1\n        max_area = 0\n        while left < right:\n            area = min(height[left], height[right]) * (right - left)\n            max_area = max(max_area, area)\n            if height[left] < height[right]:\n                left += 1\n            else:\n                right -= 1\n        return max_area",
// //       cpp: "class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int left = 0, right = height.size() - 1;\n        int maxArea = 0;\n        while (left < right) {\n            int area = min(height[left], height[right]) * (right - left);\n            maxArea = max(maxArea, area);\n            if (height[left] < height[right]) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n        return maxArea;\n    }\n};"
// //     },
// //     hints: [
// //       "If you simulate the problem, it will be O(n^2) which is not efficient.",
// //       "Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line."
// //     ],
// //     expectedTimeComplexity: "O(n)",
// //     expectedSpaceComplexity: "O(1)"
// //   },
// // {
// //     "title": "Spiral Matrix",
// //     "titleSlug": "spiral-matrix",
// //     "questionId": 3,
// //     "difficulty": "Medium",
// //     "difficultyScore": 6.0,
// //     "tags": ["Array","Matrix","Simulation"],
// //     "description": "Given an m x n matrix, return all elements of the matrix in spiral order.",
// //     "exampleTestCases": [
// //         "Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [1,2,3,6,9,8,7,4,5]",
// //         "Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\nOutput: [1,2,3,4,8,12,11,10,9,5,6,7]"
// //     ],
// //     "constraints": [
// //         "m == matrix.length",
// //         "n == matrix[i].length",
// //         "1 <= m, n <= 10",
// //         "-100 <= matrix[i][j] <= 100"
// //     ],
// //     "acceptedRate": "53.4%",
// //     "companies": ["Wipro", "IBM", "Accenture"],
// //     "templates": {
// //         "java": "class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    vector<int> spiralOrder(vector<vector<int>>& matrix) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> result = new ArrayList<>();\n        if (matrix == null || matrix.length == 0) return result;\n        int top = 0, bottom = matrix.length - 1;\n        int left = 0, right = matrix[0].length - 1;\n\n        while (top <= bottom && left <= right) {\n            for (int i = left; i <= right; i++) result.add(matrix[top][i]);\n            top++;\n            for (int i = top; i <= bottom; i++) result.add(matrix[i][right]);\n            right--;\n            if (top <= bottom) {\n                for (int i = right; i >= left; i--) result.add(matrix[bottom][i]);\n                bottom--;\n            }\n            if (left <= right) {\n                for (int i = bottom; i >= top; i--) result.add(matrix[i][left]);\n                left++;\n            }\n        }\n\n        return result;\n    }\n}",
// //         "python": "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        result = []\n        if not matrix:\n            return result\n        top, bottom = 0, len(matrix) - 1\n        left, right = 0, len(matrix[0]) - 1\n\n        while top <= bottom and left <= right:\n            for i in range(left, right + 1):\n                result.append(matrix[top][i])\n            top += 1\n\n            for i in range(top, bottom + 1):\n                result.append(matrix[i][right])\n            right -= 1\n\n            if top <= bottom:\n                for i in range(right, left - 1, -1):\n                    result.append(matrix[bottom][i])\n                bottom -= 1\n\n            if left <= right:\n                for i in range(bottom, top - 1, -1):\n                    result.append(matrix[i][left])\n                left += 1\n\n        return result",
// //         "cpp": "class Solution {\npublic:\n    vector<int> spiralOrder(vector<vector<int>>& matrix) {\n        vector<int> result;\n        if (matrix.empty()) return result;\n        int top = 0, bottom = matrix.size() - 1;\n        int left = 0, right = matrix[0].size() - 1;\n\n        while (top <= bottom && left <= right) {\n            for (int i = left; i <= right; ++i) result.push_back(matrix[top][i]);\n            ++top;\n            for (int i = top; i <= bottom; ++i) result.push_back(matrix[i][right]);\n            --right;\n            if (top <= bottom) {\n                for (int i = right; i >= left; --i) result.push_back(matrix[bottom][i]);\n                --bottom;\n            }\n            if (left <= right) {\n                for (int i = bottom; i >= top; --i) result.push_back(matrix[i][left]);\n                ++left;\n            }\n        }\n\n        return result;\n    }\n};"
// //     },
// //     "hints": [
// //         "Well for some problems, the best way really is to come up with some algorithms for simulation. Basically, you need to simulate what the problem asks us to do.",
// //         "We go boundary by boundary and move inwards. That is the essential operation. First row, last column, last row, first column, and then we move inwards by 1 and repeat. That's all. That is all the simulation that we need."
// //     ],
// //     "expectedTimeComplexity": "O(m × n)",
// //     "expectedSpaceComplexity": "O(m × n) (output list)"
// // },
// // {
// //     "title": "Merge Intervals",
// //     "titleSlug": "merge-intervals",
// //     "questionId": 4,
// //     "difficulty": "Medium",
// //     "difficultyScore": 6.0,
// //     "tags": ["Array","Sorting"],
// //     "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
// //     "exampleTestCases": [
// //         "Input: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]",
// //         "Input: intervals = [[1,4],[4,5]]\nOutput: [[1,5]]"
// //     ],
// //     "constraints": [
// //         "1 <= intervals.length <= 10^4",
// //         "intervals[i].length == 2",
// //         "0 <= starti <= endi <= 10^4"
// //     ],
// //     "acceptedRate": "49.1%",
// //     "companies": ["Tech Mahindra", "Cognizant", "Mphasis"],
// //     "templates": {
// //         "java": "class Solution {\n    public int[][] merge(int[][] intervals) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "import java.util.*;\n\nclass Solution {\n    public int[][] merge(int[][] intervals) {\n        if (intervals.length <= 1) return intervals;\n\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> merged = new ArrayList<>();\n\n        int[] current = intervals[0];\n        for (int[] interval : intervals) {\n            if (interval[0] <= current[1]) {\n                current[1] = Math.max(current[1], interval[1]);\n            } else {\n                merged.add(current);\n                current = interval;\n            }\n        }\n        merged.add(current);\n        return merged.toArray(new int[merged.size()][]);\n    }\n}",
// //         "python": "class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        if len(intervals) <= 1:\n            return intervals\n\n        intervals.sort(key=lambda x: x[0])\n        merged = []\n        current = intervals[0]\n\n        for interval in intervals:\n            if interval[0] <= current[1]:\n                current[1] = max(current[1], interval[1])\n            else:\n                merged.append(current)\n                current = interval\n        merged.append(current)\n        return merged",
// //         "cpp": "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        if (intervals.size() <= 1) return intervals;\n\n        sort(intervals.begin(), intervals.end());\n        vector<vector<int>> merged;\n        vector<int> current = intervals[0];\n\n        for (auto& interval : intervals) {\n            if (interval[0] <= current[1]) {\n                current[1] = max(current[1], interval[1]);\n            } else {\n                merged.push_back(current);\n                current = interval;\n            }\n        }\n        merged.push_back(current);\n        return merged;\n    }\n};"
// //     },
// //     "hints": [],
// //     "expectedTimeComplexity": "O(n log n) (due to sorting)",
// //     "expectedSpaceComplexity": "O(n) (for output list)"
// // },
// // {
// //     "title": "Number of Islands",
// //     "titleSlug": "number-of-islands",
// //     "questionId": 5,
// //     "difficulty": "Medium",
// //     "difficultyScore": 6.0,
// //     "tags": ["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"],
// //     "description": "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
// //     "exampleTestCases": [
// //         "Input: grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]\nOutput: 1",
// //         "Input: grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]\nOutput: 3"
// //     ],
// //     "constraints": [
// //         "m == grid.length",
// //         "n == grid[i].length",
// //         "1 <= m, n <= 300",
// //         "grid[i][j] is '0' or '1'"
// //     ],
// //     "acceptedRate": "62%",
// //     "companies": ["Tech Mahindra", "Wipro", "Mphasis"],
// //     "templates": {
// //         "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        if (grid == null || grid.length == 0) return 0;\n        int count = 0;\n        for (int i = 0; i < grid.length; i++) {\n            for (int j = 0; j < grid[0].length; j++) {\n                if (grid[i][j] == '1') {\n                    dfs(grid, i, j);\n                    count++;\n                }\n            }\n        }\n        return count;\n    }\n\n    private void dfs(char[][] grid, int i, int j) {\n        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') return;\n        grid[i][j] = '0';\n        dfs(grid, i - 1, j);\n        dfs(grid, i + 1, j);\n        dfs(grid, i, j - 1);\n        dfs(grid, i, j + 1);\n    }\n}",
// //         "python": "class Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        if not grid:\n            return 0\n\n        rows, cols = len(grid), len(grid[0])\n        count = 0\n\n        def dfs(r, c):\n            if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':\n                return\n            grid[r][c] = '0'\n            dfs(r-1, c)\n            dfs(r+1, c)\n            dfs(r, c-1)\n            dfs(r, c+1)\n\n        for r in range(rows):\n            for c in range(cols):\n                if grid[r][c] == '1':\n                    dfs(r, c)\n                    count += 1\n\n        return count",
// //         "cpp": "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        if (grid.empty()) return 0;\n        int count = 0;\n        int rows = grid.size();\n        int cols = grid[0].size();\n\n        for (int i = 0; i < rows; ++i) {\n            for (int j = 0; j < cols; ++j) {\n                if (grid[i][j] == '1') {\n                    dfs(grid, i, j);\n                    ++count;\n                }\n            }\n        }\n        return count;\n    }\n\nprivate:\n    void dfs(vector<vector<char>>& grid, int i, int j) {\n        if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() || grid[i][j] == '0') return;\n        grid[i][j] = '0';\n        dfs(grid, i-1, j);\n        dfs(grid, i+1, j);\n        dfs(grid, i, j-1);\n        dfs(grid, i, j+1);\n    }\n};"
// //     },
// //     "hints": [],
// //     "expectedTimeComplexity": "O(m × n)",
// //     "expectedSpaceComplexity": "O(m × n)"
// // },
// // {
// //     "title": "Combinations",
// //     "titleSlug": "combinations",
// //     "questionId": 6,
// //     "difficulty": "Medium",
// //     "difficultyScore": 6.0,
// //     "tags": ["Backtracking"],
// //     "description": "Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n]. You may return the answer in any order.",
// //     "exampleTestCases": [
// //         "Input: n = 4, k = 2\nOutput: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
// //         "Input: n = 1, k = 1\nOutput: [[1]]"
// //     ],
// //     "constraints": [
// //         "1 <= n <= 20",
// //         "1 <= k <= n"
// //     ],
// //     "acceptedRate": "72.6%",
// //     "companies": ["Coforge", "L&T Technology", "LTIMindtree"],
// //     "templates": {
// //         "java": "class Solution {\n    public List<List<Integer>> combine(int n, int k) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def combine(self, n: int, k: int) -> List[List[int]]:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    vector<vector<int>> combine(int n, int k) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public List<List<Integer>> combine(int n, int k) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(result, new ArrayList<>(), 1, n, k);\n        return result;\n    }\n\n    private void backtrack(List<List<Integer>> result, List<Integer> temp, int start, int n, int k) {\n        if (temp.size() == k) {\n            result.add(new ArrayList<>(temp));\n            return;\n        }\n        for (int i = start; i <= n; i++) {\n            temp.add(i);\n            backtrack(result, temp, i + 1, n, k);\n            temp.remove(temp.size() - 1);\n        }\n    }\n}",
// //         "python": "class Solution:\n    def combine(self, n: int, k: int) -> List[List[int]]:\n        result = []\n\n        def backtrack(start, path):\n            if len(path) == k:\n                result.append(path[:])\n                return\n            for i in range(start, n + 1):\n                path.append(i)\n                backtrack(i + 1, path)\n                path.pop()\n\n        backtrack(1, [])\n        return result",
// //         "cpp": "class Solution {\npublic:\n    vector<vector<int>> combine(int n, int k) {\n        vector<vector<int>> result;\n        vector<int> path;\n        backtrack(1, n, k, path, result);\n        return result;\n    }\n\nprivate:\n    void backtrack(int start, int n, int k, vector<int>& path, vector<vector<int>>& result) {\n        if (path.size() == k) {\n            result.push_back(path);\n            return;\n        }\n        for (int i = start; i <= n; ++i) {\n            path.push_back(i);\n            backtrack(i + 1, n, k, path, result);\n            path.pop_back();\n        }\n    }\n};"
// //     },
// //     "hints": [],
// //     "expectedTimeComplexity": "O(C(n, k) × k)",
// //     "expectedSpaceComplexity": "O(C(n, k))"
// // },
// // {
// //     "title": "Search in Rotated Sorted Array",
// //     "titleSlug": "search-in-rotated-sorted-array",
// //     "questionId": 7,
// //     "difficulty": "Medium",
// //     "difficultyScore": 6.0,
// //     "tags": ["Array", "Binary Search"],
// //     "description": "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.",
// //     "exampleTestCases": [
// //         "Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4",
// //         "Input: nums = [4,5,6,7,0,1,2], target = 3\nOutput: -1"
// //     ],
// //     "constraints": [
// //         "1 <= nums.length <= 5000",
// //         "-10^4 <= nums[i] <= 10^4",
// //         "All values of nums are unique",
// //         "nums is an ascending array that is possibly rotated",
// //         "-10^4 <= target <= 10^4"
// //     ],
// //     "acceptedRate": "42.6%",
// //     "companies": ["Birlasoft", "Hexaware Technologies", "Cyient"],
// //     "templates": {
// //         "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public int search(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[left] <= nums[mid]) {\n                if (nums[left] <= target && target < nums[mid]) {\n                    right = mid - 1;\n                } else {\n                    left = mid + 1;\n                }\n            } else {\n                if (nums[mid] < target && target <= nums[right]) {\n                    left = mid + 1;\n                } else {\n                    right = mid - 1;\n                }\n            }\n        }\n        return -1;\n    }\n}",
// //         "python": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        left, right = 0, len(nums) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if nums[mid] == target:\n                return mid\n            if nums[left] <= nums[mid]:\n                if nums[left] <= target < nums[mid]:\n                    right = mid - 1\n                else:\n                    left = mid + 1\n            else:\n                if nums[mid] < target <= nums[right]:\n                    left = mid + 1\n                else:\n                    right = mid - 1\n        return -1",
// //         "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int left = 0, right = nums.size() - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[left] <= nums[mid]) {\n                if (nums[left] <= target && target < nums[mid]) {\n                    right = mid - 1;\n                } else {\n                    left = mid + 1;\n                }\n            } else {\n                if (nums[mid] < target && target <= nums[right]) {\n                    left = mid + 1;\n                } else {\n                    right = mid - 1;\n                }\n            }\n        }\n        return -1;\n    }\n};"
// //     },
// //     "hints": [],
// //     "expectedTimeComplexity": "O(log n)",
// //     "expectedSpaceComplexity": "O(1)"
// // },
// // {
// //     "title": "Merge Sorted Array",
// //     "titleSlug": "merge-sorted-array",
// //     "questionId": 8,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Array", "Two Pointers", "Sorting"],
// //     "description": "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.",
// //     "exampleTestCases": [
// //         "Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\nOutput: [1,2,2,3,5,6]",
// //         "Input: nums1 = [1], m = 1, nums2 = [], n = 0\nOutput: [1]"
// //     ],
// //     "constraints": [
// //         "nums1.length == m + n",
// //         "nums2.length == n",
// //         "0 <= m, n <= 200",
// //         "1 <= m + n <= 200",
// //         "-10^9 <= nums1[i], nums2[j] <= 10^9"
// //     ],
// //     "acceptedRate": "52.6%",
// //     "companies": ["Salesforce", "Intel", "Atlassian"],
// //     "templates": {
// //         "java": "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        int i = m - 1;\n        int j = n - 1;\n        int k = m + n - 1;\n        \n        while (i >= 0 && j >= 0) {\n            if (nums1[i] > nums2[j]) {\n                nums1[k--] = nums1[i--];\n            } else {\n                nums1[k--] = nums2[j--];\n            }\n        }\n\n        while (j >= 0) {\n            nums1[k--] = nums2[j--];\n        }\n    }\n}",
// //         "python": "class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        i, j, k = m - 1, n - 1, m + n - 1\n        \n        while i >= 0 and j >= 0:\n            if nums1[i] > nums2[j]:\n                nums1[k] = nums1[i]\n                i -= 1\n            else:\n                nums1[k] = nums2[j]\n                j -= 1\n            k -= 1\n\n        while j >= 0:\n            nums1[k] = nums2[j]\n            j -= 1\n            k -= 1",
// //         "cpp": "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        int i = m - 1;\n        int j = n - 1;\n        int k = m + n - 1;\n        \n        while (i >= 0 && j >= 0) {\n            if (nums1[i] > nums2[j]) {\n                nums1[k--] = nums1[i--];\n            } else {\n                nums1[k--] = nums2[j--];\n            }\n        }\n\n        while (j >= 0) {\n            nums1[k--] = nums2[j--];\n        }\n    }\n};"
// //     },
// //     "hints": [
// //         "You can easily solve this problem if you simply think about two elements at a time rather than two arrays. We know that each of the individual arrays is sorted. What we don't know is how they will intertwine. Can we take a local decision and arrive at an optimal solution?",
// //         "If you simply consider one element each at a time from the two arrays and make a decision and proceed accordingly, you will arrive at the optimal solution."
// //     ],
// //     "expectedTimeComplexity": "O(m + n)",
// //     "expectedSpaceComplexity": "O(1)"
// // },
// // {
// //     "title": "Majority Element",
// //     "titleSlug": "majority-element",
// //     "questionId": 9,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Array", "Hash Table", "Divide and Conquer", "Sorting", "Counting"],
// //     "description": "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
// //     "exampleTestCases": [
// //         "Input: nums = [3,2,3]\nOutput: 3",
// //         "Input: nums = [2,2,1,1,1,2,2]\nOutput: 2"
// //     ],
// //     "constraints": [
// //         "n == nums.length",
// //         "1 <= n <= 5 * 10^4",
// //         "-10^9 <= nums[i] <= 10^9"
// //     ],
// //     "acceptedRate": "65.6%",
// //     "companies": ["LTIMindtree", "HCLTech", "Deloitte"],
// //     "templates": {
// //         "java": "class Solution {\n    public int majorityElement(int[] nums) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public int majorityElement(int[] nums) {\n        int count = 0;\n        int candidate = 0;\n\n        for (int num : nums) {\n            if (count == 0) {\n                candidate = num;\n            }\n            count += (num == candidate) ? 1 : -1;\n        }\n        return candidate;\n    }\n}",
// //         "python": "class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        count = 0\n        candidate = None\n\n        for num in nums:\n            if count == 0:\n                candidate = num\n            count += (1 if num == candidate else -1)\n\n        return candidate",
// //         "cpp": "class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int count = 0;\n        int candidate = 0;\n\n        for (int num : nums) {\n            if (count == 0) {\n                candidate = num;\n            }\n            count += (num == candidate) ? 1 : -1;\n        }\n        return candidate;\n    }\n};"
// //     },
// //     "hints": [],
// //     "expectedTimeComplexity": "O(n)",
// //     "expectedSpaceComplexity": "O(1)"
// // },
// // {
// //     "title": "Happy Number",
// //     "titleSlug": "happy-number",
// //     "questionId": 10,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Hash Table", "Math", "Two Pointers"],
// //     "description": "Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy. Return true if n is a happy number, and false if not.",
// //     "exampleTestCases": [
// //         "Input: n = 19\nOutput: true",
// //         "Input: n = 2\nOutput: false"
// //     ],
// //     "constraints": [
// //         "1 <= n <= 2^31 - 1"
// //     ],
// //     "acceptedRate": "57.8%",
// //     "companies": ["Zensar Technologies", "HCLTech", "Deloitte"],
// //     "templates": {
// //         "java": "class Solution {\n    public boolean isHappy(int n) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def isHappy(self, n: int) -> bool:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    bool isHappy(int n) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public boolean isHappy(int n) {\n        Set<Integer> seen = new HashSet<>();\n        while (n != 1 && !seen.contains(n)) {\n            seen.add(n);\n            n = getNext(n);\n        }\n        return n == 1;\n    }\n\n    private int getNext(int n) {\n        int totalSum = 0;\n        while (n > 0) {\n            int d = n % 10;\n            n /= 10;\n            totalSum += d * d;\n        }\n        return totalSum;\n    }\n}",
// //         "python": "class Solution:\n    def isHappy(self, n: int) -> bool:\n        def get_next(number):\n            total_sum = 0\n            while number > 0:\n                number, digit = divmod(number, 10)\n                total_sum += digit ** 2\n            return total_sum\n\n        seen = set()\n        while n != 1 and n not in seen:\n            seen.add(n)\n            n = get_next(n)\n        return n == 1",
// //         "cpp": "class Solution {\npublic:\n    bool isHappy(int n) {\n        unordered_set<int> seen;\n        while (n != 1 && seen.find(n) == seen.end()) {\n            seen.insert(n);\n            n = getNext(n);\n        }\n        return n == 1;\n    }\n\nprivate:\n    int getNext(int n) {\n        int totalSum = 0;\n        while (n > 0) {\n            int d = n % 10;\n            n /= 10;\n            totalSum += d * d;\n        }\n        return totalSum;\n    }\n};"
// //     },
// //     "hints": [],
// //     "expectedTimeComplexity": "O(log n)",
// //     "expectedSpaceComplexity": "O(log n)"
// // },
// // {
// //     "title": "Linked List Cycle",
// //     "titleSlug": "linked-list-cycle",
// //     "questionId": 11,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Hash Table", "Linked List", "Two Pointers"],
// //     "description": "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter. Return true if there is a cycle in the linked list. Otherwise, return false.",
// //     "exampleTestCases": [
// //         "Input: head = [1,2], pos = 0\nOutput: true",
// //         "Input: head = [1], pos = -1\nOutput: false"
// //     ],
// //     "constraints": [
// //         "The number of the nodes in the list is in the range [0, 10^4].",
// //         "-10^5 <= Node.val <= 10^5",
// //         "pos is -1 or a valid index in the linked-list."
// //     ],
// //     "acceptedRate": "52.3%",
// //     "companies": ["Zensar Technologies", "HCLTech", "Deloitte"],
// //     "templates": {
// //         "java": "class Solution {\n    public boolean hasCycle(ListNode head) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        // TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public boolean hasCycle(ListNode head) {\n        if (head == null || head.next == null) return false;\n\n        ListNode slow = head;\n        ListNode fast = head.next;\n\n        while (slow != fast) {\n            if (fast == null || fast.next == null) return false;\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return true;\n    }\n}",
// //         "python": "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        if not head or not head.next:\n            return False\n\n        slow = head\n        fast = head.next\n\n        while slow != fast:\n            if not fast or not fast.next:\n                return False\n            slow = slow.next\n            fast = fast.next.next\n\n        return True",
// //         "cpp": "class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        if (!head || !head->next) return false;\n\n        ListNode *slow = head;\n        ListNode *fast = head->next;\n\n        while (slow != fast) {\n            if (!fast || !fast->next) return false;\n            slow = slow->next;\n            fast = fast->next->next;\n        }\n        return true;\n    }\n};"
// //     },
// //     "hints": [],
// //     "expectedTimeComplexity": "O(N)",
// //     "expectedSpaceComplexity": "O(1)"
// // },
// // {
// //     "title": "Invert Binary Tree",
// //     "titleSlug": "invert-binary-tree",
// //     "questionId": 12,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
// //     "description": "Given the root of a binary tree, invert the tree, and return its root.",
// //     "exampleTestCases": [
// //         "Input: root = [4,2,7,1,3,6,9]\nOutput: [4,7,2,9,6,3,1]",
// //         "Input: root = [2,1,3]\nOutput: [2,3,1]"
// //     ],
// //     "constraints": [
// //         "The number of nodes in the tree is in the range [0, 100].",
// //         "-100 <= Node.val <= 100"
// //     ],
// //     "acceptedRate": "78.8%",
// //     "companies": ["KPMG", "Luxoft", "Infosys"],
// //     "templates": {
// //         "java": "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        // TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if (root == null) return null;\n\n        TreeNode left = invertTree(root.left);\n        TreeNode right = invertTree(root.right);\n\n        root.left = right;\n        root.right = left;\n\n        return root;\n    }\n}",
// //         "python": "class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        if root is None:\n            return None\n\n        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)\n\n        return root",
// //         "cpp": "class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        if (!root) return nullptr;\n\n        TreeNode* left = invertTree(root->left);\n        TreeNode* right = invertTree(root->right);\n\n        root->left = right;\n        root->right = left;\n\n        return root;\n    }\n};"
// //     },
// //     "hints": [],
// //     "expectedTimeComplexity": "O(N)",
// //     "expectedSpaceComplexity": "O(H)"
// // },
// // {
// //     "title": "Factorial of a Number",
// //     "titleSlug": "factorial-of-a-number",
// //     "questionId": 14,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Math", "Recursion"],
// //     "description": "Given an integer n, return the factorial of n. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.",
// //     "exampleTestCases": [
// //         "Input: n = 5\nOutput: 120",
// //         "Input: n = 0\nOutput: 1"
// //     ],
// //     "constraints": [
// //         "0 <= n <= 12"
// //     ],
// //     "acceptedRate": "75.2%",
// //     "companies": ["Infosys", "TCS", "Accenture"],
// //     "templates": {
// //         "java": "class Solution {\n    public int factorial(int n) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def factorial(self, n: int) -> int:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    int factorial(int n) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n}",
// //         "python": "class Solution:\n    def factorial(self, n: int) -> int:\n        if n <= 1:\n            return 1\n        return n * self.factorial(n - 1)",
// //         "cpp": "class Solution {\npublic:\n    int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n};"
// //     },
// //     "hints": [
// //         "What is the base case for factorial?",
// //         "How can you express factorial(n) in terms of factorial(n-1)?"
// //     ],
// //     "expectedTimeComplexity": "O(n)",
// //     "expectedSpaceComplexity": "O(n)"
// // },
// // {
// //     "title": "Fibonacci Number",
// //     "titleSlug": "fibonacci-number",
// //     "questionId": 15,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Math", "Dynamic Programming", "Recursion"],
// //     "description": "Given an integer n, return the nth Fibonacci number. The Fibonacci sequence is defined as F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1.",
// //     "exampleTestCases": [
// //         "Input: n = 2\nOutput: 1",
// //         "Input: n = 4\nOutput: 3"
// //     ],
// //     "constraints": [
// //         "0 <= n <= 30"
// //     ],
// //     "acceptedRate": "68.5%",
// //     "companies": ["Amazon", "Google", "Microsoft"],
// //     "templates": {
// //         "java": "class Solution {\n    public int fib(int n) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def fib(self, n: int) -> int:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    int fib(int n) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public int fib(int n) {\n        if (n <= 1) return n;\n        return fib(n - 1) + fib(n - 2);\n    }\n}",
// //         "python": "class Solution:\n    def fib(self, n: int) -> int:\n        if n <= 1:\n            return n\n        return self.fib(n - 1) + self.fib(n - 2)",
// //         "cpp": "class Solution {\npublic:\n    int fib(int n) {\n        if (n <= 1) return n;\n        return fib(n - 1) + fib(n - 2);\n    }\n};"
// //     },
// //     "hints": [
// //         "What are the base cases?",
// //         "How can you break down the problem into smaller subproblems?"
// //     ],
// //     "expectedTimeComplexity": "O(2^n)",
// //     "expectedSpaceComplexity": "O(n)"
// // },
// // {
// //     "title": "Palindrome Number",
// //     "titleSlug": "palindrome-number",
// //     "questionId": 16,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Math"],
// //     "description": "Given an integer x, return true if x is a palindrome, and false otherwise. A palindrome number reads the same backward as forward.",
// //     "exampleTestCases": [
// //         "Input: x = 121\nOutput: true",
// //         "Input: x = -121\nOutput: false"
// //     ],
// //     "constraints": [
// //         "-2^31 <= x <= 2^31 - 1"
// //     ],
// //     "acceptedRate": "52.3%",
// //     "companies": ["Facebook", "Apple", "Adobe"],
// //     "templates": {
// //         "java": "class Solution {\n    public boolean isPalindrome(int x) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public boolean isPalindrome(int x) {\n        if (x < 0) return false;\n        int original = x;\n        int reversed = 0;\n        while (x > 0) {\n            reversed = reversed * 10 + x % 10;\n            x /= 10;\n        }\n        return original == reversed;\n    }\n}",
// //         "python": "class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        if x < 0:\n            return False\n        original, reversed_num = x, 0\n        while x > 0:\n            reversed_num = reversed_num * 10 + x % 10\n            x = x // 10\n        return original == reversed_num",
// //         "cpp": "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        if (x < 0) return false;\n        int original = x;\n        long reversed = 0;\n        while (x > 0) {\n            reversed = reversed * 10 + x % 10;\n            x /= 10;\n        }\n        return original == reversed;\n    }\n};"
// //     },
// //     "hints": [
// //         "Negative numbers cannot be palindromes",
// //         "Try reversing the number and comparing with original"
// //     ],
// //     "expectedTimeComplexity": "O(log n)",
// //     "expectedSpaceComplexity": "O(1)"
// // },
// // {
// //     "title": "Reverse Integer",
// //     "titleSlug": "reverse-integer",
// //     "questionId": 17,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Math"],
// //     "description": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
// //     "exampleTestCases": [
// //         "Input: x = 123\nOutput: 321",
// //         "Input: x = -123\nOutput: -321"
// //     ],
// //     "constraints": [
// //         "-2^31 <= x <= 2^31 - 1"
// //     ],
// //     "acceptedRate": "27.8%",
// //     "companies": ["Bloomberg", "Amazon", "Microsoft"],
// //     "templates": {
// //         "java": "class Solution {\n    public int reverse(int x) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def reverse(self, x: int) -> int:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    int reverse(int x) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public int reverse(int x) {\n        int rev = 0;\n        while (x != 0) {\n            int pop = x % 10;\n            x /= 10;\n            if (rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE/10 && pop > 7)) return 0;\n            if (rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE/10 && pop < -8)) return 0;\n            rev = rev * 10 + pop;\n        }\n        return rev;\n    }\n}",
// //         "python": "class Solution:\n    def reverse(self, x: int) -> int:\n        sign = -1 if x < 0 else 1\n        x = abs(x)\n        rev = 0\n        while x != 0:\n            rev = rev * 10 + x % 10\n            x = x // 10\n        rev *= sign\n        return rev if -2**31 <= rev <= 2**31 - 1 else 0",
// //         "cpp": "class Solution {\npublic:\n    int reverse(int x) {\n        int rev = 0;\n        while (x != 0) {\n            int pop = x % 10;\n            x /= 10;\n            if (rev > INT_MAX/10 || (rev == INT_MAX/10 && pop > 7)) return 0;\n            if (rev < INT_MIN/10 || (rev == INT_MIN/10 && pop < -8)) return 0;\n            rev = rev * 10 + pop;\n        }\n        return rev;\n    }\n};"
// //     },
// //     "hints": [
// //         "Handle negative numbers properly",
// //         "Check for overflow before it happens"
// //     ],
// //     "expectedTimeComplexity": "O(log x)",
// //     "expectedSpaceComplexity": "O(1)"
// // },
// // {
// //     "title": "Power of Two",
// //     "titleSlug": "power-of-two",
// //     "questionId": 18,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Math", "Bit Manipulation"],
// //     "description": "Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two if there exists an integer x such that n == 2^x.",
// //     "exampleTestCases": [
// //         "Input: n = 1\nOutput: true",
// //         "Input: n = 16\nOutput: true"
// //     ],
// //     "constraints": [
// //         "-2^31 <= n <= 2^31 - 1"
// //     ],
// //     "acceptedRate": "45.6%",
// //     "companies": ["Google", "Apple", "Adobe"],
// //     "templates": {
// //         "java": "class Solution {\n    public boolean isPowerOfTwo(int n) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public boolean isPowerOfTwo(int n) {\n        if (n <= 0) return false;\n        return (n & (n - 1)) == 0;\n    }\n}",
// //         "python": "class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        if n <= 0:\n            return False\n        return (n & (n - 1)) == 0",
// //         "cpp": "class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        if (n <= 0) return false;\n        return (n & (n - 1)) == 0;\n    }\n};"
// //     },
// //     "hints": [
// //         "Think about the binary representation of powers of two",
// //         "What's special about them in binary form?"
// //     ],
// //     "expectedTimeComplexity": "O(1)",
// //     "expectedSpaceComplexity": "O(1)"
// // },
// // {
// //     "title": "Valid Parentheses",
// //     "titleSlug": "valid-parentheses",
// //     "questionId": 19,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["String", "Stack"],
// //     "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 1. Open brackets must be closed by the same type of brackets. 2. Open brackets must be closed in the correct order.",
// //     "exampleTestCases": [
// //         "Input: s = \"()\"\nOutput: true",
// //         "Input: s = \"(]\"\nOutput: false"
// //     ],
// //     "constraints": [
// //         "1 <= s.length <= 10^4",
// //         "s consists of parentheses only '()[]{}'"
// //     ],
// //     "acceptedRate": "40.5%",
// //     "companies": ["Amazon", "Facebook", "Google"],
// //     "templates": {
// //         "java": "class Solution {\n    public boolean isValid(String s) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def isValid(self, s: str) -> bool:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') stack.push(')');\n            else if (c == '{') stack.push('}');\n            else if (c == '[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}",
// //         "python": "class Solution:\n    def isValid(self, s: str) -> bool:\n        stack = []\n        mapping = {')': '(', '}': '{', ']': '['}\n        for char in s:\n            if char in mapping:\n                top = stack.pop() if stack else '#'\n                if mapping[char] != top:\n                    return False\n            else:\n                stack.append(char)\n        return not stack",
// //         "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        stack<char> st;\n        for (char c : s) {\n            if (c == '(') st.push(')');\n            else if (c == '{') st.push('}');\n            else if (c == '[') st.push(']');\n            else if (st.empty() || st.top() != c) return false;\n            else st.pop();\n        }\n        return st.empty();\n    }\n};"
// //     },
// //     "hints": [
// //         "Use a stack to keep track of opening brackets",
// //         "When you encounter a closing bracket, check if it matches the top of the stack"
// //     ],
// //     "expectedTimeComplexity": "O(n)",
// //     "expectedSpaceComplexity": "O(n)"
// // },
// // {
// //     "title": "Merge Two Sorted Lists",
// //     "titleSlug": "merge-two-sorted-lists",
// //     "questionId": 20,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Linked List", "Recursion"],
// //     "description": "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
// //     "exampleTestCases": [
// //         "Input: l1 = [1,2,4], l2 = [1,3,4]\nOutput: [1,1,2,3,4,4]",
// //         "Input: l1 = [], l2 = []\nOutput: []"
// //     ],
// //     "constraints": [
// //         "The number of nodes in both lists is in the range [0, 50]",
// //         "-100 <= Node.val <= 100",
// //         "Both l1 and l2 are sorted in non-decreasing order"
// //     ],
// //     "acceptedRate": "58.7%",
// //     "companies": ["Microsoft", "Amazon", "Apple"],
// //     "templates": {
// //         "java": "class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        // TODO: Implement\n    }\n}",
// //         "python": "class Solution:\n    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        # TODO: Implement",
// //         "cpp": "class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //         "java": "class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(-1);\n        ListNode curr = dummy;\n        while (l1 != null && l2 != null) {\n            if (l1.val <= l2.val) {\n                curr.next = l1;\n                l1 = l1.next;\n            } else {\n                curr.next = l2;\n                l2 = l2.next;\n            }\n            curr = curr.next;\n        }\n        curr.next = l1 == null ? l2 : l1;\n        return dummy.next;\n    }\n}",
// //         "python": "class Solution:\n    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode(-1)\n        curr = dummy\n        while l1 and l2:\n            if l1.val <= l2.val:\n                curr.next = l1\n                l1 = l1.next\n            else:\n                curr.next = l2\n                l2 = l2.next\n            curr = curr.next\n        curr.next = l1 if l1 else l2\n        return dummy.next",
// //         "cpp": "class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n        ListNode dummy(-1);\n        ListNode* curr = &dummy;\n        while (l1 && l2) {\n            if (l1->val <= l2->val) {\n                curr->next = l1;\n                l1 = l1->next;\n            } else {\n                curr->next = l2;\n                l2 = l2->next;\n            }\n            curr = curr->next;\n        }\n        curr->next = l1 ? l1 : l2;\n        return dummy.next;\n    }\n};"
// //     },
// //     "hints": [
// //         "Use a dummy node to start the merged list",
// //         "Compare the nodes of both lists and attach the smaller one"
// //     ],
// //     "expectedTimeComplexity": "O(n + m)",
// //     "expectedSpaceComplexity": "O(1)"
// // },
// // {
// //     "title": "Valid Anagram",
// //     "titleSlug": "valid-anagram",
// //     "questionId": 22,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Hash Table", "String", "Sorting"],
// //     "description": "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
// //     "exampleTestCases": [
// //       "Input: s = \"anagram\", t = \"nagaram\"\nOutput: true",
// //       "Input: s = \"rat\", t = \"car\"\nOutput: false"
// //     ],
// //     "constraints": [
// //       "1 <= s.length, t.length <= 5 * 10^4",
// //       "s and t consist of lowercase English letters."
// //     ],
// //     "acceptedRate": "59.4%",
// //     "companies": ["Amazon", "Adobe", "Apple"],
// //     "templates": {
// //       "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        // TODO: Implement\n    }\n}",
// //       "python": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # TODO: Implement",
// //       "cpp": "class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //       "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (char c : s.toCharArray()) count[c - 'a']++;\n        for (char c : t.toCharArray()) count[c - 'a']--;\n        for (int i : count) if (i != 0) return false;\n        return true;\n    }\n}",
// //       "python": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        if len(s) != len(t):\n            return False\n        countS, countT = {}, {}\n        for c in s:\n            countS[c] = 1 + countS.get(c, 0)\n        for c in t:\n            countT[c] = 1 + countT.get(c, 0)\n        return countS == countT",
// //       "cpp": "class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        if (s.length() != t.length()) return false;\n        vector<int> count(26, 0);\n        for (char c : s) count[c - 'a']++;\n        for (char c : t) count[c - 'a']--;\n        for (int val : count) if (val != 0) return false;\n        return true;\n    }\n};"
// //     },
// //     "hints": [
// //       "Check if the lengths of the strings are equal.",
// //       "Use a hash table or an array to count character frequencies."
// //     ],
// //     "expectedTimeComplexity": "O(n)",
// //     "expectedSpaceComplexity": "O(1)" // Assuming constant alphabet size
// //   },
// //   {
// //     "title": "Binary Search",
// //     "titleSlug": "binary-search",
// //     "questionId": 23,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Array", "Binary Search"],
// //     "description": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.",
// //     "exampleTestCases": [
// //       "Input: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4",
// //       "Input: nums = [-1,0,3,5,9,12], target = 2\nOutput: -1"
// //     ],
// //     "constraints": [
// //       "1 <= nums.length <= 10^4",
// //       "-10^4 <= nums[i], target <= 10^4",
// //       "All integers in nums are distinct",
// //       "nums is sorted in ascending order."
// //     ],
// //     "acceptedRate": "45.1%",
// //     "companies": ["Google", "Facebook", "Microsoft"],
// //     "templates": {
// //       "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // TODO: Implement\n    }\n}",
// //       "python": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        // TODO: Implement",
// //       "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //       "java": "class Solution {\n    public int search(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) left = mid + 1;\n            else right = mid - 1;\n        }\n        return -1;\n    }\n}",
// //       "python": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        left, right = 0, len(nums) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if nums[mid] == target:\n                return mid\n            if nums[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        return -1",
// //       "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int left = 0, right = nums.size() - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) left = mid + 1;\n            else right = mid - 1;\n        }\n        return -1;\n    }\n};"
// //     },
// //     "hints": [
// //       "Binary search works on sorted arrays.",
// //       "Adjust the left or right pointer based on the middle element."
// //     ],
// //     "expectedTimeComplexity": "O(log n)",
// //     "expectedSpaceComplexity": "O(1)"
// //   },
// //   {
// //     "title": "First Bad Version",
// //     "titleSlug": "first-bad-version",
// //     "questionId": 24,
// //     "difficulty": "Easy",
// //     "difficultyScore": 4.0,
// //     "tags": ["Binary Search"],
// //     "description": "You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad. You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.",
// //     "exampleTestCases": [
// //       "Input: n = 5, bad = 4\nOutput: 4",
// //       "Input: n = 1, bad = 1\nOutput: 1"
// //     ],
// //     "constraints": [
// //       "1 <= n <= 2^31 - 1",
// //       "bad is an integer within the range [1, n]."
// //     ],
// //     "acceptedRate": "41.2%",
// //     "companies": ["Facebook", "Microsoft", "Amazon"],
// //     "templates": {
// //       "java": "/* The isBadVersion API is defined in the parent class VersionControl.\n      boolean isBadVersion(int version); */\n\npublic class Solution extends VersionControl {\n    public int firstBadVersion(int n) {\n        // TODO: Implement\n    }\n}",
// //       "python": "# The isBadVersion API is already defined for you.\n# def isBadVersion(version: int) -> bool:\n\nclass Solution:\n    def firstBadVersion(self, n: int) -> int:\n        # TODO: Implement",
// //       "cpp": "// The API isBadVersion is defined for you.\n// bool isBadVersion(int version);  \n// class Solution : public VersionControl {\n// public:\n//     int firstBadVersion(int n) {\n//         // TODO: Implement\n//     }\n// };"
// //     },
// //     "solutions": {
// //       "java": "/* The isBadVersion API is defined in the parent class VersionControl.\n      boolean isBadVersion(int version); */\n\npublic class Solution extends VersionControl {\n    public int firstBadVersion(int n) {\n        int left = 1, right = n;\n        while (left < right) {\n            int mid = left + (right - left) / 2;\n            if (isBadVersion(mid)) right = mid;\n            else left = mid + 1;\n        }\n        return left;\n    }\n}",
// //       "python": "# The isBadVersion API is already defined for you.\n# def isBadVersion(version: int) -> bool:\n\nclass Solution:\n    def firstBadVersion(self, n: int) -> int:\n        left, right = 1, n\n        while left < right:\n            mid = left + (right - left) // 2\n            if isBadVersion(mid):\n                right = mid\n            else:\n                left = mid + 1\n        return left",
// //       "cpp": "// The API isBadVersion is defined for you.\n// bool isBadVersion(int version);  \n// class Solution : public VersionControl {\n// public:\n//     int firstBadVersion(int n) {\n//         int left = 1, right = n;\n//         while (left < right) {\n//             int mid = left + (right - left) / 2;\n//             if (isBadVersion(mid)) right = mid;\n//             else left = mid + 1;\n//         }\n//         return left;\n//     }\n// };"
// //     },
// //     "hints": [
// //       "Use binary search to reduce the number of API calls.",
// //       "When you find a bad version, continue searching in the left half to find the first one."
// //     ],
// //     "expectedTimeComplexity": "O(log n)",
// //     "expectedSpaceComplexity": "O(1)"
// //   },
// // {
// //     "title": "Linear Search",
// //     "titleSlug": "linear-search",
// //     "questionId": 51,  // Assuming you want to continue the ID sequence
// //     "difficulty": "Easy",
// //     "difficultyScore": 3.0,
// //     "tags": ["Array"],
// //     "description": "Given an array of integers `nums` and an integer `target`, find the index of the `target` in the array. If the target is not found, return -1.",
// //     "exampleTestCases": [
// //       "Input: nums = [4,5,2,8,9], target = 2\nOutput: 2",
// //       "Input: nums = [1,2,3,4,5], target = 6\nOutput: -1"
// //     ],
// //     "constraints": [
// //       "1 <= nums.length <= 10^4",
// //       "-10^4 <= nums[i], target <= 10^4"
// //     ],
// //     "acceptedRate": "65.0%",
// //     "companies": ["Generic"], //  Could be "All" or remove if not specific
// //     "templates": {
// //       "java": "class Solution {\n    public int linearSearch(int[] nums, int target) {\n        // TODO: Implement\n    }\n}",
// //       "python": "class Solution:\n    def linearSearch(self, nums: List[int], target: int) -> int:\n        # TODO: Implement",
// //       "cpp": "class Solution {\npublic:\n    int linearSearch(vector<int>& nums, int target) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //       "java": "class Solution {\n    public int linearSearch(int[] nums, int target) {\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] == target) {\n                return i;\n            }\n        }\n        return -1;\n    }\n}",
// //       "python": "class Solution:\n    def linearSearch(self, nums: List[int], target: int) -> int:\n        for i, num in enumerate(nums):\n            if num == target:\n                return i\n        return -1",
// //       "cpp": "class Solution {\npublic:\n    int linearSearch(vector<int>& nums, int target) {\n        for (int i = 0; i < nums.size(); ++i) {\n            if (nums[i] == target) {\n                return i;\n            }\n        }\n        return -1;\n    }\n};"
// //     },
// //     "hints": [
// //       "Iterate through the array and compare each element with the target.",
// //       "Return the index if you find a match, otherwise return -1 after checking all elements."
// //     ],
// //     "expectedTimeComplexity": "O(n)",
// //     "expectedSpaceComplexity": "O(1)"
// //   },
// //   {
// //     "title": "Maximum Subarray Sum",
// //     "titleSlug": "maximum-subarray-sum",
// //     "questionId": 52,
// //     "difficulty": "Medium",
// //     "difficultyScore": 5.5,
// //     "tags": ["Array", "Dynamic Programming", "Divide and Conquer"],
// //     "description": "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
// //     "exampleTestCases": [
// //       "Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6",
// //       "Input: nums = [1]\nOutput: 1",
// //       "Input: nums = [-2, -1]\nOutput: -1"
// //     ],
// //     "constraints": [
// //       "1 <= nums.length <= 10^5",
// //       "-10^4 <= nums[i] <= 10^4"
// //     ],
// //     "acceptedRate": "49.5%",
// //     "companies": ["Facebook", "Amazon", "Microsoft"],
// //     "templates": {
// //       "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // TODO: Implement\n    }\n}",
// //       "python": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        # TODO: Implement",
// //       "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //       "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSoFar = nums[0];\n        int currentMax = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            currentMax = Math.max(nums[i], currentMax + nums[i]);\n            maxSoFar = Math.max(maxSoFar, currentMax);\n        }\n        return maxSoFar;\n    }\n}",
// //       "python": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        max_so_far = nums[0]\n        curr_max = nums[0]\n        for i in range(1, len(nums)):\n            curr_max = max(nums[i], curr_max + nums[i])\n            max_so_far = max(max_so_far, curr_max)\n        return max_so_far",
// //       "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int maxSoFar = nums[0];\n        int currentMax = nums[0];\n        for (int i = 1; i < nums.size(); i++) {\n            currentMax = max(nums[i], currentMax + nums[i]);\n            maxSoFar = max(maxSoFar, currentMax);\n        }\n        return maxSoFar;\n    }\n};"
// //     },
// //     "hints": [
// //       "Use Kadane's Algorithm.",
// //       "Keep track of the maximum subarray sum ending at each position."
// //     ],
// //     "expectedTimeComplexity": "O(n)",
// //     "expectedSpaceComplexity": "O(1)"
// //   },
// //   {
// //     "title": "Subarray Sum Equals K",
// //     "titleSlug": "subarray-sum-equals-k",
// //     "questionId": 53,
// //     "difficulty": "Medium",
// //     "difficultyScore": 6.0,
// //     "tags": ["Array", "Hash Table"],
// //     "description": "Given an array of integers `nums` and an integer `k`, return the number of contiguous subarrays whose sum equals `k`.",
// //     "exampleTestCases": [
// //       "Input: nums = [1,1,1], k = 2\nOutput: 2",
// //       "Input: nums = [1,2,3], k = 3\nOutput: 2"
// //     ],
// //     "constraints": [
// //       "1 <= nums.length <= 2 * 10^4",
// //       "-1000 <= nums[i] <= 1000",
// //       "-1000 <= k <= 1000"
// //     ],
// //     "acceptedRate": "43.4%",
// //     "companies": ["Facebook", "Microsoft"],
// //     "templates": {
// //       "java": "class Solution {\n    public int subarraySum(int[] nums, int k) {\n        // TODO: Implement\n    }\n}",
// //       "python": "class Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        # TODO: Implement",
// //       "cpp": "class Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        // TODO: Implement\n    }\n};"
// //     },
// //     "solutions": {
// //       "java": "class Solution {\n    public int subarraySum(int[] nums, int k) {\n        int count = 0;\n        Map<Integer, Integer> sumMap = new HashMap<>();\n        sumMap.put(0, 1);\n        int sum = 0;\n        for (int num : nums) {\n            sum += num;\n            if (sumMap.containsKey(sum - k)) {\n                count += sumMap.get(sum - k);\n            }\n            sumMap.put(sum, sumMap.getOrDefault(sum, 0) + 1);\n        }\n        return count;\n    }\n}",
// //       "python": "class Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        count = 0\n        sum_map = {0: 1}\n        curr_sum = 0\n        for num in nums:\n            curr_sum += num\n            if curr_sum - k in sum_map:\n                count += sum_map[curr_sum - k]\n            sum_map[curr_sum] = sum_map.get(curr_sum, 0) + 1\n        return count",
// //       "cpp": "class Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        int count = 0;\n        unordered_map<int, int> sumMap;\n        sumMap[0] = 1;\n        int sum = 0;\n        for (int num : nums) {\n            sum += num;\n            if (sumMap.count(sum - k)) {\n                count += sumMap[sum - k];\n            }\n            sumMap[sum]++;\n        }\n        return count;\n    }\n};"
// //     },
// //     "hints": [
// //       "Use a hash map to store prefix sums and their frequencies.",
// //       "For each prefix sum, check how many times (prefix sum - k) has occurred."
// //     ],
// //     "expectedTimeComplexity": "O(n)",
// //     "expectedSpaceComplexity": "O(n)"
// //   },
// {
//     "title": "Find Second Largest Element in an Array",
//     "titleSlug": "find-second-largest-element-in-an-array",
//     "questionId": 54,
//     "difficulty": "Easy",
//     "difficultyScore": 4.5,
//     "tags": ["Array"],
//     "description": "Given an array of integers `nums`, find and return the second largest element in the array. If the array has fewer than two elements, return an appropriate indicator (e.g., -1 or handle the edge case as specified).",
//     "exampleTestCases": [
//       "Input: nums = [3, 7, 2, 9, 5]\nOutput: 7",
//       "Input: nums = [1, 1, 1, 1]\nOutput: 1",
//       "Input: nums = [5]\nOutput: -1"
//     ],
//     "constraints": [
//       "1 <= nums.length <= 10^4",
//       "-10^5 <= nums[i] <= 10^5"
//     ],
//     "acceptedRate": "58.2%",
//     "companies": ["Generic"],
//     "templates": {
//       "java": "class Solution {\n    public int findSecondLargest(int[] nums) {\n        // TODO: Implement\n    }\n}",
//       "python": "class Solution:\n    def findSecondLargest(self, nums: List[int]) -> int:\n        # TODO: Implement",
//       "cpp": "class Solution {\npublic:\n    int findSecondLargest(vector<int>& nums) {\n        // TODO: Implement\n    }\n};"
//     },
//     "solutions": {
//       "java": "class Solution {\n    public int findSecondLargest(int[] nums) {\n        if (nums.length < 2) {\n            return -1;\n        }\n        int largest = Integer.MIN_VALUE;\n        int secondLargest = Integer.MIN_VALUE;\n        for (int num : nums) {\n            if (num > largest) {\n                secondLargest = largest;\n                largest = num;\n            } else if (num > secondLargest && num < largest) {\n                secondLargest = num;\n            }\n        }\n        return secondLargest == Integer.MIN_VALUE ? (largest == Integer.MIN_VALUE ? -1 : largest) : secondLargest;\n    }\n}",
//       "python": "class Solution:\n    def findSecondLargest(self, nums: List[int]) -> int:\n        if len(nums) < 2:\n            return -1\n        largest = float('-inf')\n        second_largest = float('-inf')\n        for num in nums:\n            if num > largest:\n                second_largest = largest\n                largest = num\n            elif num > second_largest and num < largest:\n                second_largest = num\n        return second_largest if second_largest != float('-inf') else (largest if largest != float('-inf') else -1)",
//       "cpp": "class Solution {\npublic:\n    int findSecondLargest(vector<int>& nums) {\n        if (nums.size() < 2) {\n            return -1;\n        }\n        int largest = INT_MIN;\n        int secondLargest = INT_MIN;\n        for (int num : nums) {\n            if (num > largest) {\n                secondLargest = largest;\n                largest = num;\n            } else if (num > secondLargest && num < largest) {\n                secondLargest = num;\n            }\n        }\n        return secondLargest == INT_MIN ? (largest == INT_MIN ? -1 : largest) : secondLargest;\n    }\n};"
//     },
//     "hints": [
//       "Keep track of the largest and second largest elements while iterating through the array.",
//       "Handle the edge case where the array has fewer than two elements."
//     ],
//     "expectedTimeComplexity": "O(n)",
//     "expectedSpaceComplexity": "O(1)"
//   },
//   {
//     "title": "Move All Zeros To End",
//     "titleSlug": "move-all-zeros-to-end",
//     "questionId": 55,
//     "difficulty": "Easy",
//     "difficultyScore": 4.0,
//     "tags": ["Array", "Two Pointers"],
//     "description": "Given an integer array `nums`, move all the zeros to the end of it while maintaining the relative order of the non-zero elements.\n\n**Note:** You must do this in-place without making a copy of the array.",
//     "exampleTestCases": [
//       "Input: nums = [0,1,0,3,12]\nOutput: [1,3,12,0,0]",
//       "Input: nums = [0]\nOutput: [0]"
//     ],
//     "constraints": [
//       "1 <= nums.length <= 10^4",
//       "-10^4 <= nums[i] <= 10^4"
//     ],
//     "acceptedRate": "61.8%",
//     "companies": ["Amazon", "Facebook", "Microsoft"],
//     "templates": {
//       "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        // TODO: Implement\n    }\n}",
//       "python": "class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        # Do not return anything, modify nums in-place instead.\n        # TODO: Implement",
//       "cpp": "class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        // TODO: Implement\n    }\n};"
//     },
//     "solutions": {
//       "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int nonZeroIndex = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                nums[nonZeroIndex++] = nums[i];\n            }\n        }\n        while (nonZeroIndex < nums.length) {\n            nums[nonZeroIndex++] = 0;\n        }\n    }\n}",
//       "python": "class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        non_zero_index = 0\n        for i in range(len(nums)):\n            if nums[i] != 0:\n                nums[non_zero_index] = nums[i]\n                non_zero_index += 1\n        while non_zero_index < len(nums):\n            nums[non_zero_index] = 0\n            non_zero_index += 1",
//       "cpp": "class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        int nonZeroIndex = 0;\n        for (int i = 0; i < nums.size(); ++i) {\n            if (nums[i] != 0) {\n                nums[nonZeroIndex++] = nums[i];\n            }\n        }\n        while (nonZeroIndex < nums.size()) {\n            nums[nonZeroIndex++] = 0;\n        }\n    }\n};"
//     },
//     "hints": [
//       "Use a two-pointer approach. One pointer to track the position to place the next non-zero element.",
//       "Iterate through the array. If the current element is non-zero, move it to the tracked position."
//     ],
//     "expectedTimeComplexity": "O(n)",
//     "expectedSpaceComplexity": "O(1)"
//   },
//   {
//     "title": "Reverse an Array",
//     "titleSlug": "reverse-an-array",
//     "questionId": 56,
//     "difficulty": "Easy",
//     "difficultyScore": 3.5,
//     "tags": ["Array", "Two Pointers"],
//     "description": "Given an array of integers `nums`, reverse the order of the elements in-place.",
//     "exampleTestCases": [
//       "Input: nums = [1, 2, 3, 4, 5]\nOutput: [5, 4, 3, 2, 1]",
//       "Input: nums = [5, 4, 3, 2, 1]\nOutput: [1, 2, 3, 4, 5]",
//       "Input: nums = [1]\nOutput: [1]"
//     ],
//     "constraints": [
//       "1 <= nums.length <= 10^5",
//       "-10^4 <= nums[i] <= 10^4"
//     ],
//     "acceptedRate": "75.3%",
//     "companies": ["Generic"],
//     "templates": {
//       "java": "class Solution {\n    public void reverseArray(int[] nums) {\n        // TODO: Implement\n    }\n}",
//       "python": "class Solution:\n    def reverseArray(self, nums: List[int]) -> None:\n        # Do not return anything, modify nums in-place instead.\n        # TODO: Implement",
//       "cpp": "class Solution {\npublic:\n    void reverseArray(vector<int>& nums) {\n        // TODO: Implement\n    }\n};"
//     },
//     "solutions": {
//       "java": "class Solution {\n    public void reverseArray(int[] nums) {\n        int left = 0;\n        int right = nums.length - 1;\n        while (left < right) {\n            int temp = nums[left];\n            nums[left++] = nums[right];\n            nums[right--] = temp;\n        }\n    }\n}",
//       "python": "class Solution:\n    def reverseArray(self, nums: List[int]) -> None:\n        left, right = 0, len(nums) - 1\n        while left < right:\n            nums[left], nums[right] = nums[right], nums[left]\n            left += 1\n            right -= 1",
//       "cpp": "class Solution {\npublic:\n    void reverseArray(vector<int>& nums) {\n        int left = 0;\n        int right = nums.size() - 1;\n        while (left < right) {\n            swap(nums[left++], nums[right--]);\n        }\n    }\n};"
//     },
//     "hints": [
//       "Use two pointers, one starting from the beginning and the other from the end of the array.",
//       "Swap the elements at the two pointers and move the pointers towards the center."
//     ],
//     "expectedTimeComplexity": "O(n)",
//     "expectedSpaceComplexity": "O(1)"
//   },
//   {
//     "title": "Rotate Array",
//     "titleSlug": "rotate-array",
//     "questionId": 57,
//     "difficulty": "Medium",
//     "difficultyScore": 5.0,
//     "tags": ["Array", "Math", "Two Pointers"],
//     "description": "Given an array of integers `nums` and an integer `k`, rotate the array to the right by `k` steps, where `k` is non-negative.",
//     "exampleTestCases": [
//       "Input: nums = [1,2,3,4,5,6,7], k = 3\nOutput: [5,6,7,1,2,3,4]",
//       "Input: nums = [-1,-100,3,99], k = 2\nOutput: [3,99,-1,-100]"
//     ],
//     "constraints": [
//       "1 <= nums.length <= 10^5",
//       "-10^4 <= nums[i] <= 10^4",
//       "0 <= k <= 10^5"
//     ],
//     "acceptedRate": "39.1%",
//     "companies": ["Amazon", "Apple", "Microsoft"],
//     "templates": {
//       "java": "class Solution {\n    public void rotate(int[] nums, int k) {\n        // TODO: Implement\n    }\n}",
//       "python": "class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        # Do not return anything, modify nums in-place instead.\n        # TODO: Implement",
//       "cpp": "class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        // TODO: Implement\n    }\n};"
//     },
//     "solutions": {
//       "java": "class Solution {\n    public void rotate(int[] nums, int k) {\n        k %= nums.length;\n        reverse(nums, 0, nums.length - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n    }\n\n    private void reverse(int[] nums, int start, int end) {\n        while (start < end) {\n            int temp = nums[start];\n            nums[start++] = nums[end];\n            nums[end--] = temp;\n        }\n    }\n}",
//       "python": "class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        n = len(nums)\n        k %= n\n        def reverse(arr, start, end):\n            while start < end:\n                arr[start], arr[end] = arr[end], arr[start]\n                start += 1\n                end -= 1\n        reverse(nums, 0, n - 1)\n        reverse(nums, 0, k - 1)\n        reverse(nums, k, n - 1)",
//       "cpp": "class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        int n = nums.size();\n        k %= n;\n        reverse(nums.begin(), nums.end());\n        reverse(nums.begin(), nums.begin() + k);\n        reverse(nums.begin() + k, nums.end());\n    }\n};"
//     },
//     "hints": [
//       "Rotating the entire array, then the first k elements, and then the remaining elements might be a useful approach.",
//       "Consider using the modulo operator (%) to handle cases where k is larger than the array length."
//     ],
//     "expectedTimeComplexity": "O(n)",
//     "expectedSpaceComplexity": "O(1)"
//   },
// ];

// // Insert data
// async function seedDatabase() {
//   try {
//     // Clear existing data
//     // await Problem.deleteMany({});
//     // console.log('Cleared existing problems');
    
//     // Insert new problems
//     const inserted = await Problem.insertMany(problems);
//     console.log(`Successfully inserted ${inserted.length} problems`);
//   } catch (err) {
//     console.error('Error seeding database:', err);
//   } finally {
//     mongoose.disconnect();
//   }
// }

// seedDatabase();