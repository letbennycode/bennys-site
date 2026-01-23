---
name: git-workflow
description: Handles git operations including committing and pushing code to repository. Ensures tasks are completed fully before pushing. Use when code changes need to be committed, when pushing to repository, or when verifying task completion.
---

# Git Workflow and Task Completion

## Task Completion Checklist

Before committing and pushing, verify:

- [ ] All requirements are implemented
- [ ] Code follows clean code principles
- [ ] No linting errors or warnings
- [ ] Code is tested (if applicable)
- [ ] Error handling is in place
- [ ] Code is properly formatted

## Commit Message Format

Use conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc.
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(auth): implement JWT token validation

Add middleware to validate JWT tokens on protected routes.
Includes error handling for expired and invalid tokens.

fix(api): correct date formatting in user profile

Use UTC timestamps consistently across all date fields.
```

## Git Workflow Steps

1. **Check status**: `git status`
2. **Stage changes**: `git add <files>` or `git add .` for all changes
3. **Commit**: `git commit -m "descriptive message"`
4. **Push**: `git push origin <branch>`

## When to Push

- ✅ Task is fully complete and tested
- ✅ Code meets quality standards
- ✅ Commit message is descriptive
- ✅ No broken functionality

**Do NOT push:**
- ❌ Incomplete implementations
- ❌ Code with linting errors
- ❌ Untested code that breaks existing functionality
- ❌ Temporary or debug code

## Iterative Completion

If a task is not complete:
1. Identify what's missing
2. Implement the missing pieces
3. Verify all requirements
4. Then commit and push

Continue working until the task is fully complete before pushing.
