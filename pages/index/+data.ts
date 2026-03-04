// https://vike.dev/data
// import { useConfig } from "vike-solid/useConfig";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data() {
    // https://vike.dev/useConfig
    // const config = useConfig();

    const response = await fetch(
        'https://raw.githubusercontent.com/v3xlabs/v3x-data/master/team/contributors.json'
    );
    const contributors = await response.json() as { contributors: string[] };

    // config({
    //     // Set <title>
    //     title: `${moviesData.length} Star Wars Movies`,
    // });

    return contributors;
}
