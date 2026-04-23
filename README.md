Hash Map & Hash Set

A custom JavaScript implementation of a Hash Map and Hash Set, built to handle data efficiently using hashing, collision management, and dynamic resizing.

Key Features

    Collision Handling: Uses bucket-chaining to store multiple items at the same index.

    Dynamic Growth: Automatically doubles capacity when the map is 75% full to keep lookups fast.

    Rehashing: Ensures all data is correctly redistributed whenever the map expands.

    HashSet: A secondary class built on top of the HashMap to handle unique collections.

Methods

    set(key, value) / add(key): Store data or unique items.

    get(key): Retrieve values in O(1) time.

    has(key): Check for existence.

    remove(key): Delete entries and maintain size.

    clear(): Reset the entire structure.

    keys(), values(), entries(): Export map data to arrays.

Logic Overview

The map uses a load factor of 0.75. Once the internal size exceeds this threshold, the map re-initializes with double the buckets and re-inserts all existing entries to prevent performance degradation.
