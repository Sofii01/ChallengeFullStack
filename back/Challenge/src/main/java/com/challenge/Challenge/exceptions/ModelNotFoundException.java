package com.challenge.Challenge.exceptions;

public class ModelNotFoundException extends RuntimeException{
    public ModelNotFoundException(Integer idNotFound, String nameModel) {
        super(String.format("The object was not found - id not found: %d - Name Model: %s",
                idNotFound, nameModel));
    }
}
