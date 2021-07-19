---
title: second blog
description: test, testing test
author: test
---

some fancy text here and there

## Some subtitle

**bold text**

### csharp

```csharp
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace VentureDbApp
{
    public class Program
    {
        public const string DefaultLanguage = "en";

        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
```

### sql

```sql
CREATE OR REPLACE FUNCTION public.get_user(_id bigint) RETURNS TABLE(id bigint, email character varying, name character varying, picture character varying, data json, providers character varying[], providertimestamps json, region_id integer, country character varying, timezone character varying, stripe_customer_id character varying, stripe_subscription_id character varying, is_subscribed boolean, is_subscription_canceled boolean, created timestamp without time zone, accessed timestamp without time zone, accepted timestamp without time zone)
    LANGUAGE sql STABLE SECURITY DEFINER
    AS $$
select 
    u.id,
    email,
    u.name,
    data->'Google'->'data'->>'picture' as picture,
    data,
    providers,
    (
        select 
            json_object(array_agg(p), array_agg(((data->p->>'timestamp')::timestamp at time zone timezone)::varchar))
        from unnest(providers) p
    ) as providerTimestamps,
    u.region_id,
    r.name as country,
    timezone,
    stripe_customer_id,
    stripe_subscription_id,
    subscribed as is_subscribed,
    subscription_canceled as is_subscription_canceled,
    created at time zone timezone,
    accessed at time zone timezone,
    accepted at time zone timezone
from 
    users u left outer join regions r on u.region_id = r.id
where 
    u.id = _id
$$;

REVOKE ALL ON FUNCTION public.get_user(_id bigint) FROM PUBLIC;
GRANT ALL ON FUNCTION public.get_user(_id bigint) TO venture_app;
```
