const swaggerDocumentation = {
    openapi: "3.0.1",
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API Documentation',
    },
    servers: [
        {
            url: 'http://localhost:5000/api',
            description: 'development'
        },
        {
            url: 'https://production.com',
            description: 'production'
        }
    ],
    paths: {
        "/api/v1/users": {
            get: {
                tags: ["users"],
                description: "List of the users",
                responses: {
                    200: {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                },
                                example: [
                                    {
                                        userName: "user",
                                        avatar: "https://trunkey2003.github.io/general-img/default-profile-pic.jpg",
                                        email: "user@user.com",
                                        fullName: "user",
                                        phone: "0912345678",
                                        address: "number street, ward, city, country",
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = swaggerDocumentation;