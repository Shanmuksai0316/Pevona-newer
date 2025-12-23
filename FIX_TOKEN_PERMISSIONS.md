# Fix Token Permissions

Your token is valid but doesn't have write access to the repository. Here's how to fix it:

## For Fine-Grained Tokens (github_pat_...)

1. **Go to your token settings:**
   https://github.com/settings/tokens

2. **Find your token** "Pevona Repository Access" and click on it

3. **Under "Repository access":**
   - Make sure "Only select repositories" is chosen
   - **Add** `Shanmuksai0316/Pevona-newer` to the list
   - OR select "All repositories"

4. **Under "Repository permissions" → "Contents":**
   - Set to **"Read and write"** (not just "Read")

5. **Click "Save"** at the bottom

6. **Wait 1-2 minutes** for changes to propagate

7. **Then try pushing again**

---

## Alternative: Create a Classic Token

If fine-grained tokens are causing issues:

1. **Go to:** https://github.com/settings/tokens
2. **Click:** "Generate new token" → "Generate new token (classic)"
3. **Name:** `Pevona Classic Token`
4. **Expiration:** Your choice
5. **Select scope:** ✅ **repo** (Full control)
6. **Generate** and copy the token
7. **Share the new token** and I'll update the configuration

---

## Quick Check

After updating permissions, test with:
```bash
git push -u origin main
```

