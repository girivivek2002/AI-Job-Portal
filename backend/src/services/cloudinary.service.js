import cloudinary
    from "../config/cloudinary.js";

export const uploadResumeToCloudinary =
    async (fileBuffer) => {

        return new Promise(
            (resolve, reject) => {

                const stream =
                    cloudinary.uploader.upload_stream(
                        {
                            resource_type:
                                "auto",

                            folder:
                                "job-portal/resumes"
                        },

                        (error, result) => {

                            if (error)
                                reject(error);

                            resolve(result);
                        }
                    );

                stream.end(
                    fileBuffer
                );
            }
        );
    };


export const deleteResumeFromCloudinary =
    async (publicId) => {

        await cloudinary.uploader.destroy(
            publicId,
            {
                resource_type: "image"
            }
        );
    };