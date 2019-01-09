---
  path: "/projects/psnbg"
  title: "PSN Birthday Guesser"
  excerpt: "Brute force hack to get your birthday in psn"
  created: "Dec 2016"
  thumb: "../images/PSNBG.png"
---

## Find out your registered PSNBG
I wanted to recover an old Playstation Network account, in the process it's needed to write the birth date the account was registered with and my real birthday wasn't working, I realized once you got the token (which leads you to the write your birthdate page) the amount of tries are "unlimited" so it's possible to brute force the system and get the birthdate you used in the system.
I made some reading and found out python has a really cool module for scrapping named `beautiful-soup`, after that I set up a python program that brute-forces the birth date.
I build it as a simple CLI and my database was a simple `.txt` file with the username or customname.

### Challenges
I had no idea (and I've forgotten) how to make a python program.