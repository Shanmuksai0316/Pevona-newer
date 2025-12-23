# GitHub Authentication Setup Guide

## 🔑 Option 1: SSH Authentication (Recommended - Already Set Up)

### Step 1: Add SSH Key to GitHub
1. Copy the following SSH public key:
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOpIkcDpfXeCJw9YILP9mLwjMgwP6KlyYcdAB8mQcCYM shanmuk@pevona
```

2. Go to GitHub: https://github.com/settings/keys
3. Click "New SSH key"
4. Give it a title (e.g., "Pevona Development")
5. Paste the key above
6. Click "Add SSH key"

### Step 2: Test SSH Connection
```bash
ssh -T git@github.com
```
You should see: "Hi Shanmuksai0316! You've successfully authenticated..."

### Step 3: Update Remote to Use SSH
The remote has been configured. To push:
```bash
git push -u origin main
```

---

## 🎫 Option 2: Personal Access Token (Shanmuksai0316 Account)

### Step 1: Create a Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "Pevona Repository Access"
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (if you use GitHub Actions)
5. Click "Generate token"
6. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

### Step 2: Update Remote with New Token
```bash
git remote set-url origin https://Shanmuksai0316:YOUR_NEW_TOKEN@github.com/Shanmuksai0316/Pevona-newer.git
```

### Step 3: Push
```bash
git push -u origin main
```

---

## 👥 Option 3: Add nyr95 as Collaborator

### Step 1: Add Collaborator to Repository
1. Go to: https://github.com/Shanmuksai0316/Pevona-newer/settings/access
2. Click "Add people" or "Invite a collaborator"
3. Enter username: `nyr95`
4. Select permission: **Write** (or Admin)
5. Click "Add nyr95 to this repository"

### Step 2: Use Existing Token
The current token (nyr95) will work after adding as collaborator:
```bash
git remote set-url origin https://nyr95:YOUR_TOKEN_HERE@github.com/Shanmuksai0316/Pevona-newer.git
git push -u origin main
```

---

## 📝 Current Status

- ✅ SSH key generated: `~/.ssh/id_ed25519_github`
- ✅ SSH config configured
- ⏳ **Action Required**: Add SSH key to GitHub (Option 1)
- ⏳ **OR**: Create token for Shanmuksai0316 account (Option 2)
- ⏳ **OR**: Add nyr95 as collaborator (Option 3)

---

## 🚀 Quick Push Commands

### Using SSH (after adding key to GitHub):
```bash
git remote set-url origin git@github.com:Shanmuksai0316/Pevona-newer.git
git push -u origin main
```

### Using Token (Shanmuksai0316):
```bash
git remote set-url origin https://Shanmuksai0316:YOUR_TOKEN@github.com/Shanmuksai0316/Pevona-newer.git
git push -u origin main
```

### Using Token (nyr95 - after adding as collaborator):
```bash
git remote set-url origin https://nyr95:YOUR_TOKEN_HERE@github.com/Shanmuksai0316/Pevona-newer.git
git push -u origin main
```

