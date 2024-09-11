let log = console.log;

//WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

//WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.