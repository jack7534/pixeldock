# PixelDock

**A free Windows desktop dock for sharing files and copyable text over your local network.**

[Read the illustrated English guide](https://jack7534.github.io/pixeldock/) · [Download PixelDock](https://github.com/jack7534/pixeldock/releases/latest)

![PixelDock 1.5.7 gold and mint desktop interface](images/01-shared-dock.png)

## What it does

- Pair trusted Windows computers on the same private local network.
- Add files to Shared to synchronize copies automatically.
- Keep local file, folder and tool references in a separate Local area.
- Share short notes or links that other paired computers can read and copy.
- Customize six colors, neon glow and folding palette categories.
- Use an awake Windows computer as a shared-file hub.

## Get started

1. Download the Windows ZIP from Releases and extract it.
2. Run `PixelDock-Setup.exe` on each computer.
3. Open **+ Pair computer** and exchange the pairing code privately.
4. Add a file to **Shared**. Keep both apps running and verify the file on the other computer.

Windows with .NET Framework 4.7.2 or later in the 4.x family is required. The installer currently uses Chinese labels; the English guide includes translations.

## Documentation

The guide contains 13 chapters and 12 program views covering installation, pairing, file synchronization, local references, shared text, appearance, displays, Windows host mode and troubleshooting. Program views are rendered from the released 1.5.7 application with demonstration data.

[Markdown manual](PixelDock-User-Guide-1.5.7.md)

This repository contains the documentation website. The desktop application is distributed in Releases; its application source is not included here. Free use does not imply an open-source license.

## Keep in mind

PixelDock operates on a private IPv4 local network. It does not provide an Internet relay, install onto a NAS appliance, or replace an independent backup. Deletion is not propagated; a peer holding a copy can restore a removed file. Keep pairing codes private.
