const exampleUser = {
    userName: "user",
    avatar: "https://trunkey2003.github.io/general-img/default-profile-pic.jpg",
    email: "user@user.com",
    fullName: "user",
    phone: "0912345678",
    address: "number street, ward, city, country",
    type: 0,
};

const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API Documentation',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'development'
        },
        {
            url: 'https://production.com',
            description: 'production'
        }
    ],
    components: {
        schemas: {
            User: {
                type: 'object',
                properties: {
                    _id: { type: 'string', format: 'objectid' },
                    userName: { type: 'string', minlength: 3, maxlength: 20 },
                    avatar: { type: 'string', default: "https://trunkey2003.github.io/general-img/default-profile-pic.jpg" },
                    email: { type: 'string', required: true },
                    fullName: { type: 'string', minlength: 3, maxlength: 50 },
                    phone: { type: 'string' },
                    address: { type: 'string' },
                    type: { type: 'number', default: 0 }, // 0: user, 1: admin
                }
            },
        }
    },
    paths: {
        "/api/v1/users": {
            get: {
                tags: ["users"],
                description: "List of the users, requires admin role",
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: "#/components/schemas/User"
                                    }
                                },
                                example: [
                                    exampleUser
                                ]
                            }
                        }
                    },
                    403: {
                        description: "Forbidden",
                        content: {}
                    },
                    503: {
                        description: "Service Unavailable",
                        content: {}
                    }
                }
            }
        },
        "/api/v1/users/me": {
            get: {
                tags: ["users"],
                description: "Get current user by cookie",
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                                example: exampleUser
                            }
                        }
                    },
                    401 : {
                        description: "Unauthorized",
                        content: {}
                    },
                    503: {
                        description: "Service Unavailable",
                        content: {}
                    }
                }
            }
        },
        "/api/v1/users/sign-in": {
            post: {
                tags: ["users"],
                description: "Get current user by cookie",
                requestBody:{
                    description: "Sign in",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: 'object',
                                properties: {
                                    userName : { type: 'string', minlength: 3, maxlength: 20 },
                                    password : { type: 'string', minlength: 3, maxlength: 20 }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                                example: exampleUser
                            }
                        },
                        headers:{
                            "Set-Cookie": {
                                description: "JWT Token",
                                schema:{
                                    type: 'string',
                                    example:"token=token; Path=/; HttpOnly"
                                }
                            }
                        }
                    },
                    401 : {
                        description: "Unauthorized",
                        content: {}
                    },
                    503: {
                        description: "Service Unavailable",
                        content: {}
                    }
                }
            }
        },
        "/api/v1/users/sign-up": {
            post: {
                tags: ["users"],
                description: "Get current user by cookie",
                requestBody:{
                    description: "Sign in",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: 'object',
                                properties: {
                                    userName : { type: 'string', minlength: 3, maxlength: 20, required: true},
                                    email: { type: 'string', minlength: 3, maxlength: 50, required: true},
                                    phone: { type: 'string',  minlength: 3, maxlength: 20, required: true },
                                    password : { type: 'string', minlength: 3, maxlength: 20, required: true},
                                    autoSignIn: { type: 'boolean', default: false }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                                example: exampleUser
                            }
                        },
                        headers:{
                            "Set-Cookie": {
                                description: "JWT Token",
                                schema:{
                                    type: 'string',
                                    example:"token=token; Path=/; HttpOnly"
                                }
                            }
                        }
                    },
                    401 : {
                        description: "Unauthorized",
                        content: {}
                    },
                    503: {
                        description: "Service Unavailable",
                        content: {}
                    }
                }
            }
        }
    }
}

module.exports = swaggerDocumentation;