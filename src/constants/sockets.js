export const SOCKETS_CONNECTION_REQUEST = Symbol('sockets/CONNECTION_REQUEST');
export const SOCKETS_CONNECTION_SUCCESS = Symbol('sockets/CONNECTION_SUCCESS');
export const SOCKETS_CONNECTION_FAILURE = Symbol('sockets/CONNECTION_FAILURE');
export const SOCKETS_CONNECTION_MISSING = Symbol('sockets/CONNECTION_MISSING');

export const MOUNT_CHAT = Symbol('sockets/MOUNT_CHAT');
export const UNMOUNT_CHAT = Symbol('sockets/UNMOUNT_CHAT');

export const SEND_MESSAGE = Symbol('sockets/SEND_MESSAGE');
export const READ_MESSAGE = Symbol('sockets/READ_MESSAGE');
export const RECIEVE_READ_MESSAGE = Symbol('sockets/RECIEVE_READ_MESSAGE');
export const RECIEVE_MESSAGE = Symbol('sockets/RECIEVE_MESSAGE');
export const RECIEVE_NEW_CHAT = Symbol('sockets/RECIEVE_NEW_CHAT');
export const RECIEVE_DELETED_CHAT = Symbol('sockets/RECIEVE_DELETED_CHAT');
