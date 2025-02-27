async function generateKeyFromPassword(password, salt) {
	const enc = new TextEncoder();
	const keyMaterial = await window.crypto.subtle.importKey(
		"raw",
		enc.encode(password),
		{ name: "PBKDF2" },
		false,
		["deriveKey"]
	);
	return window.crypto.subtle.deriveKey(
		{
			name: "PBKDF2",
			salt: enc.encode(salt),
			iterations: 100000,
			hash: "SHA-256"
		},
		keyMaterial,
		{ name: "AES-GCM", length: 256 },
		true,
		["encrypt", "decrypt"]
	);
}

async function encryptFile(password, salt, file) {
	const key = await generateKeyFromPassword(password, salt);
	const iv = window.crypto.getRandomValues(new Uint8Array(12));
	const enc = new TextEncoder();
	const encryptedContent = await window.crypto.subtle.encrypt(
		{
			name: "AES-GCM",
			iv: iv
		},
		key,
		enc.encode(file)
	);
	return {
		iv: iv,
		content: new Uint8Array(encryptedContent)
	};
}

async function decryptFile(password, salt, encryptedFile) {
	const key = await generateKeyFromPassword(password, salt);
	const dec = new TextDecoder();
	try {
		const decryptedContent = await window.crypto.subtle.decrypt(
			{
				name: "AES-GCM",
				iv: encryptedFile.iv
			},
			key,
			encryptedFile.content
		);
		return dec.decode(decryptedContent);
	} catch (e) {
		console.log("Decryption failed:", e);
		return null;
	}
}

function jsonToArray(json) {
	return new Uint8Array(Object.values(json));
}

