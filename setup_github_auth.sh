#!/bin/bash

# GitHub Authentication Setup Script
# This script helps you switch between different authentication methods

echo "=== GitHub Authentication Setup ==="
echo ""
echo "Choose an authentication method:"
echo "1. SSH (Recommended - requires adding SSH key to GitHub)"
echo "2. Personal Access Token (Shanmuksai0316 account)"
echo "3. Personal Access Token (nyr95 account - requires collaborator access)"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "Setting up SSH authentication..."
        git remote set-url origin git@github.com:Shanmuksai0316/Pevona-newer.git
        echo "✅ Remote updated to use SSH"
        echo ""
        echo "📋 IMPORTANT: Add your SSH key to GitHub:"
        echo "1. Go to: https://github.com/settings/keys"
        echo "2. Click 'New SSH key'"
        echo "3. Paste this key:"
        echo ""
        cat ~/.ssh/id_ed25519_github.pub
        echo ""
        echo "4. After adding, test with: ssh -T git@github.com"
        echo "5. Then push with: git push -u origin main"
        ;;
    2)
        echo ""
        read -p "Enter your Personal Access Token for Shanmuksai0316: " token
        git remote set-url origin https://Shanmuksai0316:${token}@github.com/Shanmuksai0316/Pevona-newer.git
        echo "✅ Remote updated to use token (Shanmuksai0316)"
        echo ""
        echo "You can now push with: git push -u origin main"
        ;;
    3)
        echo ""
        read -p "Enter your Personal Access Token for nyr95: " token
        git remote set-url origin https://nyr95:${token}@github.com/Shanmuksai0316/Pevona-newer.git
        echo "✅ Remote updated to use token (nyr95)"
        echo ""
        echo "⚠️  NOTE: Make sure nyr95 is added as a collaborator to the repository"
        echo "Go to: https://github.com/Shanmuksai0316/Pevona-newer/settings/access"
        echo ""
        echo "You can now push with: git push -u origin main"
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac

echo ""
echo "Current remote configuration:"
git remote -v

