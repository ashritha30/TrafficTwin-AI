
from fastapi import APIRouter, HTTPException

from app.models.user import UserLogin
from app.auth.users import users
from app.auth.jwt_handler import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/login")
def login(user: UserLogin):

    print("Received Email:", repr(user.email))
    print("Received Password:", repr(user.password))

    for u in users:

        print("Comparing With:", repr(u["email"]), repr(u["password"]))

        if (
            u["email"] == user.email
            and u["password"] == user.password
        ):

            print("✅ Login Success")

            token = create_access_token({
                "email": u["email"],
                "role": u["role"]
            })

            return {
                "message": "Login Successful",
                "token": token,
                "role": u["role"],
                "name": u["name"]
            }

    print("❌ Login Failed")

    raise HTTPException(
        status_code=401,
        detail="Invalid Email or Password"
    )