# Slot Machine Built in Node.js

This repository contains the source code for a hobby slot machine I'm building for my home.

This is a pet project. Although I'm aiming at meeting smart design and the official requirements of the Nevada Gaming Commission, I have not officially verified or certified this code.

Some of the rational for this system is outlined in my [Slot Machine Technology](https://blog.joeldare.com/slot-machine-technology/) blog post.

This package is about 12KB with no other requirements.

Express adds 2.5MB of package code. That's hardly what I would consider **minimalist**.

## Random Number Generator (rng.js)

A web service that returns three random numbers between 0 and 255. It uses crypto.randomBytes() in order to meet regulation requirements. More teechnical information is available in the front-matter of the code.

This service should run on localhost and listens on port 8088.

## Physical Design

**Display Screen**

The primary display screen is a TV running a web browser in full screen mode. This display is reactive only. When the back-end says to spin the wheels, the system does a wheel spinning animation, landing on the results that the back-end provided.
