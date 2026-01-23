---
name: security-auditor
description: Audits code for security vulnerabilities, security best practices, and potential attack vectors. Use when reviewing code for security issues, before committing code, when implementing authentication/authorization, handling user input, or when the user asks for a security review.
---

# Security Auditor

## Security Audit Checklist

When auditing code, check for:

- [ ] **Input Validation**: All user inputs are validated and sanitized
- [ ] **Authentication**: Proper authentication mechanisms in place
- [ ] **Authorization**: Access controls and permission checks
- [ ] **SQL Injection**: Parameterized queries, no string concatenation
- [ ] **XSS (Cross-Site Scripting)**: Output encoding, CSP headers
- [ ] **CSRF (Cross-Site Request Forgery)**: CSRF tokens, SameSite cookies
- [ ] **Secrets Management**: No hardcoded secrets, API keys, or passwords
- [ ] **Error Handling**: Errors don't leak sensitive information
- [ ] **Dependency Vulnerabilities**: Dependencies are up-to-date and secure
- [ ] **HTTPS/TLS**: Secure communication protocols
- [ ] **Rate Limiting**: Protection against brute force and DoS attacks
- [ ] **Logging**: Security events are logged (but not sensitive data)

## Common Security Vulnerabilities

### 1. SQL Injection

```typescript
// ❌ BAD - Vulnerable to SQL injection
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ✅ GOOD - Parameterized query
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

### 2. XSS (Cross-Site Scripting)

```typescript
// ❌ BAD - Vulnerable to XSS
<div dangerouslySetInnerHTML={{ __html: userContent }} />

// ✅ GOOD - Sanitize and escape
<div>{escapeHtml(userContent)}</div>
// Or use a library like DOMPurify
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }} />
```

### 3. Hardcoded Secrets

```typescript
// ❌ BAD - Hardcoded secret
const apiKey = 'sk_live_1234567890abcdef';

// ✅ GOOD - Use environment variables
const apiKey = process.env.API_KEY;
// Or use a secrets management service
const apiKey = await secretsManager.getSecret('api-key');
```

### 4. Insecure Authentication

```typescript
// ❌ BAD - Weak password requirements
if (password.length >= 4) {
  // accept password
}

// ✅ GOOD - Strong password requirements
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
if (!passwordRegex.test(password)) {
  throw new Error('Password must be at least 12 characters with uppercase, lowercase, number, and special character');
}
```

### 5. Missing Authorization Checks

```typescript
// ❌ BAD - No authorization check
async function deleteUser(userId: string) {
  await db.deleteUser(userId);
}

// ✅ GOOD - Check permissions
async function deleteUser(userId: string, requesterId: string) {
  const requester = await getUser(requesterId);
  if (!requester.isAdmin && requesterId !== userId) {
    throw new UnauthorizedError('Only admins or the user themselves can delete accounts');
  }
  await db.deleteUser(userId);
}
```

### 6. Information Disclosure in Errors

```typescript
// ❌ BAD - Leaks sensitive information
try {
  await authenticateUser(username, password);
} catch (error) {
  throw new Error(`Database error: ${error.message}`);
}

// ✅ GOOD - Generic error messages
try {
  await authenticateUser(username, password);
} catch (error) {
  logger.error('Authentication failed', { error, username });
  throw new AuthenticationError('Invalid credentials');
}
```

### 7. CSRF Protection

```typescript
// ❌ BAD - No CSRF protection
app.post('/api/transfer', async (req, res) => {
  await transferMoney(req.body.from, req.body.to, req.body.amount);
});

// ✅ GOOD - CSRF token validation
app.post('/api/transfer', csrfProtection, async (req, res) => {
  await transferMoney(req.body.from, req.body.to, req.body.amount);
});
```

## Security Audit Workflow

1. **Identify Attack Surface**
   - List all user inputs (forms, APIs, file uploads)
   - Identify authentication/authorization points
   - Find data storage and retrieval points

2. **Check Each Component**
   - Validate input handling
   - Verify authentication mechanisms
   - Check authorization controls
   - Review error handling

3. **Dependency Check**
   - Run `npm audit` or equivalent
   - Check for known vulnerabilities
   - Verify dependencies are up-to-date

4. **Report Findings**
   - Categorize by severity (Critical, High, Medium, Low)
   - Provide specific code examples
   - Suggest remediation steps

## Security Report Format

```markdown
# Security Audit Report

## Critical Issues
- [Issue description]
  - Location: `file.ts:line`
  - Risk: [explanation]
  - Fix: [recommendation]

## High Priority Issues
- [Issue description]
  ...

## Medium Priority Issues
- [Issue description]
  ...

## Recommendations
- [General security improvements]
```

## OWASP Top 10 Focus Areas

1. **Broken Access Control** - Verify authorization checks
2. **Cryptographic Failures** - Check encryption and hashing
3. **Injection** - SQL, NoSQL, Command injection
4. **Insecure Design** - Architecture-level security flaws
5. **Security Misconfiguration** - Default settings, exposed services
6. **Vulnerable Components** - Outdated dependencies
7. **Authentication Failures** - Weak auth mechanisms
8. **Software and Data Integrity** - CI/CD pipeline security
9. **Security Logging Failures** - Missing security event logs
10. **Server-Side Request Forgery** - SSRF vulnerabilities

## When to Run Security Audit

- Before committing code that handles user input
- When implementing authentication/authorization
- Before deploying to production
- When adding new dependencies
- When handling sensitive data (PII, payment info)
- When implementing file uploads
- When creating API endpoints
