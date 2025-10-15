package com.tka.exception;

import java.io.Serial;

public class ResourceAlreadyExistException extends Exception {

	@Serial
	private static final long serialVersionUID = 1L;

	public ResourceAlreadyExistException(String message) {
		super(message);
	}

	public ResourceAlreadyExistException(String message, Throwable cause) {
		super(message, cause);
	}

}
