export async function submitWeb3Form(data: Record<string, any>, subject: string) {
    // Use public environment variable so it works on the client-side
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '83a321d0-171c-4fad-ad01-d9a7a92a9dc5';

    if (!accessKey) {
        console.warn(
            "Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY environment variable. Form submission simulated. Please add your key to .env.local to enable real emails."
        );
        // Fallback simulation if key is missing during development
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return { success: true };
    }

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: subject,
                from_name: "Paragon",
                ...data,
            }),
        });

        const result = await response.json();
        return { success: response.ok, data: result };
    } catch (error) {
        console.error("Web3Forms submission error:", error);
        return { success: false, error };
    }
}
