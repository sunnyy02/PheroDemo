export declare namespace domain {
    namespace v_1_0_0 {
        enum UserRole {
            ADMIN = "admin",
            USER = "user"
        }
        interface User {
            name: string;
            age: number;
            role: domain.v_1_0_0.UserRole;
        }
    }
}
export declare namespace helloWorldService {
    namespace v_1_0_0 {
        function helloWorld(name: string): Promise<string>;
    }
}
export declare namespace userService {
    namespace v_1_0_0 {
        function getAllUsers(): Promise<domain.v_1_0_0.User[]>;
        function helloWorld(name: string): Promise<string>;
    }
}
