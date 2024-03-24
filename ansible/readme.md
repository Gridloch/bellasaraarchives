## Steps

This part of the repository is just for automatically setting up the files on a(n Ubuntu) server and does not contain any of the site files (those are in the site folder instead).

Note that all the commands listed here work on Ubuntu (running in WSL) but may not work on a different OS.

- Generate or reuse an ssh key (`ssh-keygen`) - make sure that this key is installed on the server
- Install Ansible locally if it is not already installed (`sudo apt install ansible`)
- Update the host file with the server IP
- From the project root, run the playbook (`ansible-playbook ./ansible/nginx.yml -i ansible/hosts`)