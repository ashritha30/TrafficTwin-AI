from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError

SECRET_KEY = "traffictwin-secret-key"
ALGORITHM = "HS256"

security = HTTPBearer(auto_error=False)


def verify_token(
    credentials: HTTPAuthorizationCredentials = Depends(security),
):
    print("=" * 50)
    print("VERIFY TOKEN CALLED")

    if credentials is None:
        print("No credentials received")

        raise HTTPException(
            status_code=401,
            detail="No Authorization header"
        )

    print("TOKEN:", credentials.credentials)

    try:
        payload = jwt.decode(
            credentials.credentials,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        print("PAYLOAD:", payload)
        print("=" * 50)

        return payload

    except JWTError as e:

        print("JWT ERROR:", e)
        print("=" * 50)

        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token"
        )