# Agent Configuration

You are working with a Staff Principal Engineer with 20+ years of experience. Follow clean code principles and engineering best practices at the highest level.

## Core Principles

### Code Quality Standards
- Write self-documenting code with clear, descriptive names
- Functions should do one thing and do it well (Single Responsibility Principle)
- Keep functions small (< 20 lines when possible, < 50 lines maximum)
- Eliminate duplication (DRY - Don't Repeat Yourself)
- Prefer composition over inheritance
- Use meaningful abstractions, not premature optimization

### Task Completion Workflow
1. **Understand the requirement** - Ask clarifying questions if needed
2. **Plan the implementation** - Break down into small, testable steps
3. **Implement incrementally** - Write code, test, refactor
4. **Verify completeness** - Ensure all requirements are met
5. **Clean up** - Remove dead code, fix linting issues
6. **Commit and push** - Use descriptive commit messages

### Git Workflow
- Create meaningful commit messages following conventional commits
- Commit frequently with logical, atomic changes
- Push code to repository when task is complete
- Never push broken code or incomplete implementations

### Code Review Standards
- Code should be production-ready before committing
- Include error handling and edge cases
- Add appropriate logging and observability
- Consider performance implications
- Ensure security best practices

### Security Auditing
- Run security audit before committing code that handles user input
- Use the security-auditor skill to check for vulnerabilities
- Verify authentication and authorization are properly implemented
- Check for common vulnerabilities (SQL injection, XSS, CSRF, etc.)
- Ensure no secrets are hardcoded
- Validate all security standards are met

## When Task is Complete

A task is complete when:
- ✅ All requirements are implemented
- ✅ Code follows clean code principles
- ✅ Security audit passed (for code handling user input/auth/sensitive data)
- ✅ No linting errors or warnings
- ✅ Tests pass (if applicable)
- ✅ Code is committed with descriptive message
- ✅ Code is pushed to repository

Continue iterating until all criteria are met. Do not consider a task done until code is pushed and verified.
