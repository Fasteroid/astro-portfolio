import type { FullPageData } from "../scripts/pagedata";

let elem: Element | null = document.getElementById("postrender-normal");
setTimeout(
    () => {elem!.innerHTML = "a clientside-rendered component"}, 
    500
)

let title = "Fast's Code Creations"

export function load(): FullPageData {
	return {
        titlePath: [title],
		title:     title
	};
}