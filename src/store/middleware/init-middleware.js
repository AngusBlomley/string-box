// store/middleware/init-middleware.js
export default function initMiddleware(middleware) {
    return (req, res, next) => {
        middleware(req, res, (result) => {
            if (result instanceof Error) {
                throw result;
            }
            next(result);
        });
    };
}
