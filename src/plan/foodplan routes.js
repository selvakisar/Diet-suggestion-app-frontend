// export const APIplan="https://zonezero.onrender.com/api/plan"
export const APIplan="http://localhost:8090/api/plan"

export async function addToPlan(foodId) {
    console.log(foodId)
    try {

        const response = await fetch(`${APIplan}/add/${foodId}`, {
            method: "POST",
            body: JSON.stringify(),
            headers: {
                "x-auth-token": localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            
        });
        const data = await response.json();
        if (response.ok) {
            return {
                success: true,
                message: data.message,
            };
        } else {
            return {
                success: false,
                message: data.error,
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while adding product to cart",
        };
    }
}


//Get My Cart
export async function myPlan() {
    try {
        const authToken = localStorage.getItem("token");

        if (!authToken) {
            return {
                success: false,
                message: "Authentication token missing",
            };
        }

        const response = await fetch(`${APIplan}/user/my-plan`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": authToken,
            },
        });
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                cart: data,
            };
        } else {
            return {
                success: false,
                message: data.error,
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while fetching user's cart",
        };
    }
}


export async function deletePlanItem(itemId) {
    try {
        const response = await fetch(`${APIplan}/delete/${itemId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"), 
            },
        });
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                message: data.message,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to delete item from plan",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while deleting item from plan",
        };
    }
}