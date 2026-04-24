# Binary KLV Chat System

A multi-threaded client-server chat application built in Java with a JavaFX user interface, using a custom binary Key-Length-Value (KLV) protocol for all communication.

## Overview

This project was built to explore low-level protocol design, concurrent networking, and real-time client-server communication in a structured way.

## Learning Objectives

By completing this project, I worked through how to:

- implement a binary protocol directly from specification
- understand byte-level data representation and endianness
- build a multi-threaded server that handles concurrent clients
- manage shared state with proper synchronization
- parse and construct nested binary data structures
- handle full bidirectional socket communication
- debug network traffic at the protocol level
- compare binary communication patterns against text-based approaches

## What the System Includes

### Server

The server:

- listens on a specified port for incoming clients
- accepts and manages multiple simultaneous connections
- parses binary KLV messages received from clients
- maintains a list of active client connections
- broadcasts messages to connected users
- stores the last 20 messages as chat history
- handles disconnects gracefully

### Client

The JavaFX client:

- connects to the server using host and port
- sends correctly formatted binary KLV messages
- parses binary server responses
- displays messages from other users in real time
- allows users to send messages and disconnect cleanly
- supports message history retrieval on connect

## Tech Stack

- Java
- JavaFX
- Sockets and multithreading
- Custom binary KLV protocol

## Why This Project Matters

This project strengthened my understanding of networking, synchronization, message parsing, and protocol-level debugging through a complete end-to-end implementation.
