# Git Submission Instructions


You will complete the JavaScript task on your own Git branch.

Do not work directly on the `main` branch.

You will create your own branch, complete the task, and push your branch to the same repository.



---

# Step 1: Clone the Repository

Clone the project from GitHub:


```bash
git clone REPOSITORY_URL
```


Open the project folder:


```bash
cd product-management
```



---

# Step 2: Check Your Current Branch

Check the current branch:


```bash
git branch
```


Make sure you are on:

```
main
```



---

# Step 3: Create Your Branch

Create a new branch using your name:
example: mohamed_saleh


```bash
git checkout -b YourName
```


Example:

```bash
git checkout -b mohamed_saleh
```



---

# Step 4: Complete the task

Complete the JavaScript task inside:


```
js/app.js
```


Do not modify:

```
index.html
css/style.css
assets/
```



---

# Step 5: Check Your Changes


Run:


```bash
git status
```


Review the files you changed.



---

# Step 6: Add Your Changes


Run:


```bash
git add .
```



---

# Step 7: Commit Your Work


Create a commit:


```bash
git commit -m "Products management JavaScript task"
```



---

# Step 8: Push Your Branch


Push your branch to GitHub:


```bash
git push origin YourName
```


Example:


```bash
git push origin mohamed_saleh
```



---

# Step 9: Check Your Submission

Open the repository on GitHub and confirm:

- Your branch was created successfully
- Your latest changes are uploaded
- Your completed code is available on your branch


---

# Important Rules

- Do not push directly to `main`
- Do not change the project structure
- Do not modify files that are not part of the task