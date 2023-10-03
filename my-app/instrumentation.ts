// @ts-ignore 
import tracker from '@middleware.io/agent-apm-nextjs'; 
 
export function register() { 
   tracker.track({
        projectName: "fe-striive",
        serviceName: "StriivePP", 
        accessToken: "tlozgaqkzrkakgnhnvliapysjgmnzoeaihza", 
        target: "vercel", 
   }); 
}