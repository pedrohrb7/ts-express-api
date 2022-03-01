"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("server"));
const app = (0, server_1.default)();
describe('dashboard routes', () => {
    it('/dash responds with 200', (done) => {
        (0, supertest_1.default)(app).get('/dash').expect(200, done);
    });
});
