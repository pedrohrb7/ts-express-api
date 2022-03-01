"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("server"));
const app = (0, server_1.default)();
// eslint-disable-next-line no-undef
describe('server checks', () => {
    // eslint-disable-next-line no-undef
    it('server is created without error', (done) => {
        (0, supertest_1.default)(app).get('/').expect(200, done);
    });
});
