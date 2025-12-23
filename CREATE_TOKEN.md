# Create GitHub Personal Access Token

## Steps to Create Token:

1. **Go to GitHub Token Settings:**
   https://github.com/settings/tokens

2. **Click:** "Generate new token" → "Generate new token (classic)"

3. **Fill in:**
   - Note: `Pevona Repository Access`
   - Expiration: Choose your preference (90 days, 1 year, etc.)
   - Select scopes:
     - ✅ **repo** (Full control of private repositories)
       - This includes: repo:status, repo_deployment, public_repo, repo:invite, security_events

4. **Click:** "Generate token" at the bottom

5. **IMPORTANT:** Copy the token immediately - you won't see it again!
   It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

6. **Share the token with me** and I'll configure git to use it.

---

## Alternative: Add SSH Key (Easier for future)

If you prefer SSH (no token needed):

1. **Go to:** https://github.com/settings/keys
2. **Click:** "New SSH key"
3. **Title:** `Pevona Development`
4. **Key:** Paste this:
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOpIkcDpfXeCJw9YILP9mLwjMgwP6KlyYcdAB8mQcCYM shanmuk@pevona
```
5. **Click:** "Add SSH key"

Then we can use SSH authentication (already configured).

